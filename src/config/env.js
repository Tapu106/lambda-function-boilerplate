const dotenv = require("dotenv");
const fs = require("fs");

const envFile = process.env.NODE_ENV === "PROD" ? ".env.prod" : ".env.dev";

if (fs.existsSync(envFile)) {
  dotenv.config({ path: envFile });
}

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "DEV",
};
