const express = require("express");

const app = express();
app.use(express.static("./public"));

app.get("/api/note", (req, res) => {
  res.status(200).json({
    message: "fetch data",
    users: {
      name: "raj",
      email: "raj@gmail.com",
      role: "student",
    },
  });
});

module.exports = app;
