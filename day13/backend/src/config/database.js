const mongoose = require("mongoose");

async function ConnectToDatabase() {
  await mongoose.connect(process.env.MONGO_URL);

  console.log("connect to MongoDB");
}

module.exports = ConnectToDatabase;
