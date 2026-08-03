# IAM role for Lambda execution
data "aws_iam_policy_document" "assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "counter_lambda_role" {
  name               = "lambda_execution_role"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json
}

# Role policy for Dynamo DB access

resource "aws_iam_role_policy" "dynamodb_access" {
  name = "visitor-counter-dynamodb-access"
  role = aws_iam_role.counter_lambda_role.id

  policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Action = [
          "dynamodb:UpdateItem",
          "dynamodb:GetItem"
        ]

        Resource = var.dynamodb_table_arn
      }
    ]
  })
}


# Package the Lambda function code
data "archive_file" "counter_lambda" {
  type        = "zip"
  source_dir = "${path.module}/../backend"
  output_path = "${path.module}/visitor-function.zip"
}

# Lambda function
resource "aws_lambda_function" "counter_lambda" {
  filename      = data.archive_file.counter_lambda.output_path
  function_name = "visitor_lambda_function"
  role          = aws_iam_role.counter_lambda_role.arn
  handler       = "app.handler"
  source_code_hash   = data.archive_file.counter_lambda.output_base64sha256

  runtime = "nodejs22.x"

  environment {
    variables = {
      TABLE_NAME = var.TABLE_NAME
      
    }
  }

  tags = {
    Environment = "production"
    Application = "Visitor Count"
  }
}