const express = require("express");
const cors = require("cors");

const visitorController = require("./controllers/visitorController.js");

exports.handler = async (event) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "https://michaelnouzieres.com",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  try {
    const response = await visitorController.addCount();
    return {
      ...response,
      headers: {
        ...corsHeaders,
        ...(response.headers || {}),
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
