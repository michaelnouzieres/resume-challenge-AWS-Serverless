variable "aws_region" {
  type = string
}

variable "profile" {
  type = string
  default = null
  description = "The local AWS CLI profile to use. Automatically ignored in OIDC environments."
}

variable "domain_name" {
  type = string
}

