module "route53" {
  source = "./modules/route53"
  domain_name = var.domain_name
  cf_domain_name = module.cloudfront.cf_domain_name
  hosted_zone_id = module.cloudfront.cf_zone_id
}

module "cloudfront" {
  source = "./modules/cloudfront"
  certificate_arn = module.acm.certificate_arn
}

module "dynamodb"{
  source = "./modules/dynamodb"
}

module "acm" {
  source = "./modules/acm"
  domain_name = var.domain_name
  zone_id = module.route53.zone_id
}

module "lambda" {
  source = "./modules/lambda"
  TABLE_NAME = var.TABLE_NAME
  dynamodb_table_arn = module.dynamodb.dynamodb_table_arn
}