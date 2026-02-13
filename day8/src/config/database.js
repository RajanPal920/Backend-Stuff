const mongoose = require("mongoose");

function ConnectDb() {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to DB");
  });
}

module.exports = ConnectDb;
