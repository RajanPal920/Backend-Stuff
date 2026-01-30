const express = require("express");
const noteModel = require("./models/notes.model");

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  const { title, desc } = req.body;

  const note = await noteModel.create({
    title,
    desc,
  });

  res.status(201).json({
    message: "note create successfully",
    note,
  });
});

app.get("/notes", async (req, res) => {
  const note = await noteModel.find();

  res.status(200).json({
    message: "Note fetch sucessfully",
    note,
  });
});

module.exports = app;
