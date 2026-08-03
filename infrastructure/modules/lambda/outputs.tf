output "function_ivk_arn" {
  value = aws_lambda_function.counter_lambda.invoke_arn
  description = "Invoke ARN for the lambda function"
}

output "function_name" {
  value = aws_lambda_function.counter_lambda.function_name
  description = "name for the lambda function"
}