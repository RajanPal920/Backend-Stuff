const express = require("express");

const app = express();
app.use(express.json());

const data = [];

app.post("/data", (req, res) => {
  data.push(req.body);
  res.status(201).json({
    message: "data created successfully",
  });
});

app.get("/data", (req, res) => {
  res.status(200).json({
    data: data,
  });
});

app.delete("/data/:index", (req, res) => {
  delete data[req.params.index];
  res.status(200).json({
    message: "data deleted successfully",
  });
});

app.patch("/data/:index", (req, res) => {
  data[req.params.index].desc = req.body.desc;

  res.status(200).json({
    message: "data updated successfully",
  });
});

app.put("/data/:index", (req, res) => {
  data[req.params.index].title = req.body.title;
  data[req.params.index].desc = req.body.desc;

  res.status(200).json({
    message: "data fully updated",
  });
});

module.exports = app;
