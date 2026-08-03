output "api_url" {
  value = aws_apigatewayv2_api.counter_api.api_endpoint
  description = "API Endpoint to use in Frontend"
}