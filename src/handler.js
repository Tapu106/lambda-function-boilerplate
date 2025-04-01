module.exports.handler = async (event, context) => {
  console.log("layer ARN: ", process.env.LAYER_ARN);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello, Serverless World!" }),
  };
};
