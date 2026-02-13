
const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(process.env.MONGO_URl).then(() => {
    console.log("Connected to Db");
  });
}

module.exports = connectDB;
