const express = require("express");

const app = express();

app.use(express.json());
const data = [];

app.post("/data", (req, res) => {
  data.push(req.body);
  res.end("post request received");
});

app.get("/data", (req, res) => {
  res.send(data);
  console.log(data);
});

app.listen(3000, () => {
  console.log("server is running...");
});
