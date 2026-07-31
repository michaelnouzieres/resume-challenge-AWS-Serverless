const { incrementCount } = require("../repository/visitorRepository.js");

exports.addCount = async () => {
  try {
    const response = await incrementCount();
    return {
      statusCode: 200,
      body: JSON.stringify({ response }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
