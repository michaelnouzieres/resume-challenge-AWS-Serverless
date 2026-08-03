output "api_gw_url" {
  value = module.api.api_url
}

output "bucket_name" {
  value = module.cloudfront.bucket_name
}

output "cf_dist_id" {
  value = module.cloudfront.cf_dist_id
}