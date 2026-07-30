const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const DynamoDBDocumentClient = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});

const doClient = DynamoDBDocumentClient.from(client);

export default doClient;
