const docClient = require("../db/dynamodbConfig.js");
const { UpdateCommand, GetCommand } = require("@aws-sdk/lib-dynamodb");

exports.incrementCount = async () => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      id: "global_counter",
    },
    UpdateExpression: "SET c = if_not_exists(c, :zero) + :incr",
    ExpressionAttributeValues: {
      ":incr": 1,
      ":zero": 0,
    },
    ReturnValues: "ALL_NEW",
  };

  try {
    const response = await docClient.send(new UpdateCommand(params));
    const counter = response.Attributes.c;
    return counter;
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
