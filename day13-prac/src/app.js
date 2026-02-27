const express = require("express");
const cookie = require("cookie-parser");
const cors = require("cors");

const authRouter = require("../src/routes/auth.route");
const postRouter = require("../src/routes/post.route");
const followRouter = require("./routes/user.route");

const app = express();
app.use(express.json());
app.use(cookie());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/user", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/follow", followRouter);

module.exports = app;
