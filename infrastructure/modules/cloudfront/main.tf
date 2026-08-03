# 1. private S3 Bucket to host files
resource "aws_s3_bucket" "mnwebsite_bucket" {
  bucket        = "michaelnouzieres-oac-2026"
  force_destroy = true
}

# Disable public access S3
resource "aws_s3_bucket_public_access_block" "website_bucket_acl" {
  bucket = aws_s3_bucket.mnwebsite_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Origin Access Control (OAC) for CloudFront
resource "aws_cloudfront_origin_access_control" "default" {
  name                              = "s3-oac-${aws_s3_bucket.mnwebsite_bucket.id}"
  description                       = "OAC to restrict access to S3"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# 3. Attach Cloudfront distribution
resource "aws_cloudfront_distribution" "s3_distribution" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  # Liaison avec notre compartiment S3 originel
  origin {
    domain_name              = aws_s3_bucket.mnwebsite_bucket.bucket_regional_domain_name
    origin_id                = "S3-${aws_s3_bucket.mnwebsite_bucket.bucket}"
    origin_access_control_id = aws_cloudfront_origin_access_control.default.id # OAC
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "S3-${aws_s3_bucket.mnwebsite_bucket.bucket}"
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 3600
    max_ttl     = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
  acm_certificate_arn = var.certificate_arn

  ssl_support_method = "sni-only"
  }

  aliases = [var.domain_name, "${var.domain_name}"]
}

# 4. IAM S3 CloudFront (OAC) 
resource "aws_s3_bucket_policy" "allow_cloudfront_oac" {
  bucket = aws_s3_bucket.mnwebsite_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipalReadOnly"
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.mnwebsite_bucket.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.s3_distribution.arn
          }
        }
      }
    ]
  })
}
