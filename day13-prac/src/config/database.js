const mongoose = require("mongoose");

async function ConnectToDB() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connect to mongoDB");
}

module.exports = ConnectToDB;
