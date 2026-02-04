const cors = require("cors");
const express = require("express");
const path = require("path")
const noteModel = require("./models/note.model");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("./public"))


app.post("/api/note", async (req, res) => {
  const { title, desc } = req.body;

  const note = await noteModel.create({
    title: title,
    desc: desc,
  });

  res.status(201).json({
    message: "Note Created..",
    note,
  });
});

app.get("/api/note", async (req, res) => {
  const note = await noteModel.find();

  res.status(200).json({
    message: "Note Fetch...",
    note,
  });
});

app.delete("/api/note/:id", async (req, res) => {
  const id = req.params.id;
  const note = await noteModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "Note Deleted...",
    note,
  });
});

app.patch("/api/note/:id", async (req, res) => {
  const { title, desc } = req.body;
  const id = req.params.id;

  const note = await noteModel.findByIdAndUpdate(id, {
    title,
    desc,
  });

  res.status(200).json({
    message: "Note Updated...",
    note,
  });
});

app.use("*name",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})

module.exports = app;
