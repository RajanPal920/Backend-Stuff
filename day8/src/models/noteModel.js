const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  title: String,
  desc: String,
  price: Number,
});

const noteModel = mongoose.model("notes", noteSchema);

module.exports = noteModel;
