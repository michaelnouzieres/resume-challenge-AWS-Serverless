resource "aws_apigatewayv2_api" "counter_api" {
  name                       = "example-websocket-api"
  protocol_type              = "HTTP"
  
}


resource "aws_apigatewayv2_integration" "counter_api_integration" {
  api_id           = aws_apigatewayv2_api.counter_api.id
  integration_type = "AWS_PROXY"

  connection_type           = "INTERNET"
  
  integration_method        = "POST"
  integration_uri           = var.lambda_ivk_arn
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "counter_api_route" {
  api_id    = aws_apigatewayv2_api.counter_api.id
  route_key = "POST /visitor-count"

  target = "integrations/${aws_apigatewayv2_integration.counter_api_integration.id}"
}

resource "aws_apigatewayv2_stage" "counter_api_stage" {
  api_id = aws_apigatewayv2_api.counter_api.id
  name = "$default"
  auto_deploy = true
}

################ Allowing API GW to invoke Lambda Counter

resource "aws_lambda_permission" "allow_api_gateway" {
  statement_id = "AllowAPIGatewayInvoke"

  action = "lambda:InvokeFunction"

  function_name = var.lambda_name

  principal = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.counter_api.execution_arn}/*"
}