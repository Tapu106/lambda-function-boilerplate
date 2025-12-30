module.exports.getHello = async (req, res, next) => {
  return res.json("Hello from serverless rest API");
};
