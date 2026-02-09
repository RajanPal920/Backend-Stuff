const express = require("express");
const ConnectToDB = require("./config/database");
const authRouter = require("../src/auth/auth.routes");
const cookieParse = require("cookie-parser");

ConnectToDB();

const app = express();
app.use(express.json());
app.use(cookieParse());
app.use("/api/auth", authRouter);

module.exports = app;
