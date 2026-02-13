const express = require("express");
const authRouther = require("../src/routes/router");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouther);

module.exports = app;
