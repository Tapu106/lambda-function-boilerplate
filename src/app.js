const { NODE_ENV } = require("./config/env");
const express = require("express");
const cors = require("cors");

const app = express();

// routes
const indexRoutes = require("./routes/index");

app.use(cors());
app.use(express.json());

app.use("/api", indexRoutes);

module.exports = app;
