const express = require("express");
const noteModel = require("./models/noteModel");
const cors = require("cors");
const path = require("path")

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.static("./public"))

app.post("/notes", async (req, res) => {
  const { title, desc, price } = req.body;

  const note = await noteModel.create({
    title,
    desc,
    price,
  });

  res.status(201).json({
    message: "Note Created",
    note,
  });
});

app.get("/notes", async (req, res) => {
  const note = await noteModel.find();

  res.status(200).json({
    message: "Note Fetch",
    note,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  const note = await noteModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "Note Deleted..",
    note,
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { title } = req.body;

  const note = await noteModel.findByIdAndUpdate(id, { title });

  res.status(200).json({
    message: "Note Update",
    note,
  });
});

app.use('*name',(req,res)=>{
  res.sendFile(path.join(__dirname,"..","/public/index.html"))
})

module.exports = app;
