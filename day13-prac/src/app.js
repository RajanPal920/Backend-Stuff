const express = require("express");
const cookie = require("cookie-parser");
const authRouter = require("../src/routes/auth.route");
const postRouter = require("../src/routes/post.route");
const app = express();
app.use(express.json());
app.use(cookie());

app.use("/api/user", authRouter);
app.use("/api/posts", postRouter);

module.exports = app;
