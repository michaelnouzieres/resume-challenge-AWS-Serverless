### Creating a DNS Zone

resource "aws_route53_zone" "primary" {
  name = var.domain_name
}

### Creating a DNS Record

resource "aws_route53_record" "mn_a_rec" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = var.domain_name
  type    = "A"
  
  alias {
    name                   = var.cf_domain_name
    zone_id                = var.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "mn_www_rec" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "www.${var.domain_name}"
  type    = "A"
  
  alias {
    name                   = var.cf_domain_name
    zone_id                = var.hosted_zone_id
    evaluate_target_health = false
  }



  
}

resource "aws_route53_record" "mn_aaaa_rec" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = var.domain_name
  type    = "AAAA"

  alias {
    name                   = var.cf_domain_name
    zone_id                = var.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "mn_www_aaaa_rec" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "www.${var.domain_name}"
  type    = "AAAA"

  alias {
    name                   = var.cf_domain_name
    zone_id                = var.hosted_zone_id
    evaluate_target_health = false
  }
}
