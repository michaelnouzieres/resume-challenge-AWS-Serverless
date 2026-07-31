const express = require("express");
const cors = require("cors");

const visitorController = require("./controllers/visitorController.js");

export const handler = async (event) => {
  try {
    const response = await visitorController.addCount();
    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
