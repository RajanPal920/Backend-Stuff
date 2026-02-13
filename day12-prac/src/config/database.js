const mongoose = require("mongoose");

function Connection() {
  mongoose.connect(process.env.MONGO_UR).then(() => {
    console.log("connect to db");
  });
}

module.exports = Connection;
