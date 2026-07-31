output "TABLE_NAME" {
  value = aws_dynamodb_table.counter_dynamodb_table.name
  description = "dynamoDB Table Name"
}


output "dynamodb_table_arn" {
  value = aws_dynamodb_table.counter_dynamodb_table.arn
}