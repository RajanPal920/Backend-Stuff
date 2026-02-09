const mongoose = require("mongoose");

async function Connection() {
  await mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("connect to DB");
  });
}

module.exports = Connection;
