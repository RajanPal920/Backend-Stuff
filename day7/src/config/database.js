const mongoose = require("mongoose");


function Connectdb() {
  mongoose.connect(process.env.MONGO_URl).then(() => {
    console.log("connect to database");
  });
}

module.exports = Connectdb;
