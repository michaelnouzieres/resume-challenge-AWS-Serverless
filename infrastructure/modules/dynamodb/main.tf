resource "aws_dynamodb_table" "counter_dynamodb_table" {
  name           = "visitour-counter"
  billing_mode   = "PAY_PER_REQUEST"
  
  hash_key       = "id"

  attribute {
    name = "id"
    type = "S"
  }

  
  tags = {
    Name        = "dynamodb-table-resume"
    Environment = "production"
  }
}