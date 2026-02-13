const mongoose = require("mongoose");

const nodeSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

const nodeModel = mongoose.model("notes", nodeSchema);

module.exports = nodeModel;
