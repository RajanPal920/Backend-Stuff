const express = require("express");
const noteModel = require("./model/database.model");

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  const { title, desc } = req.body;

  const note = await noteModel.create({
    title,
    desc,
  });

  res.status(201).json({
    message: "node Created sucessfully",
    note,
  });
});

app.get("/notes", async (req, res) => {
  const note = await noteModel.find();

  res.status(200).json({
    message: "node fetch",
    note,
  });
});

app.delete("/notes/:id", async (req, res) => {
  constnote = await noteModel.findByIdAndDelete(req.params.id);

  res.status(200).json({
    message: "Node Deleted",
    note,
  });
});

app.patch("/notes/:id", async (req, res) => {
  const note = await noteModel.findByIdAndUpdate(
    req.params.id,
    {
      desc: req.body.desc,
    },
    { new: true },
  );
  res.status(200).json({
    message: "Note updated successfully",
    note,
  });
});

app.put("/notes/:id", async (req, res) => {
  const note = await noteModel.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      desc: req.body.desc,
    },
    { new: true },
  );
  res.status(200).json({
    message: "Note updated successfully",
    note,
  });
});

module.exports = app;
