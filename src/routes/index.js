const express = require("express");
const router = express.Router();

const { getHello } = require("../controllers/index");

router.get("/", getHello);

module.exports = router;
