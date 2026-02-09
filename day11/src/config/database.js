const mongoose = require("mongoose");

function ConnectToDB() {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connect to DB");
  });
}

module.exports = ConnectToDB;
