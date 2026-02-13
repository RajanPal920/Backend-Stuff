const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const model = mongoose.model("customer", schema);

module.exports = model