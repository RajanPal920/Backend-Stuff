const express = require("express");

const app = express();

app.use(express.json());

const demo = [];

app.post("/data", (req, res) => {
  demo.push(req.body);
  res.send("POST request received");
});

app.get("/data", (req, res) => {
  res.json(demo);
  console.log(demo);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
