require("dotenv").config()
const app = require("./src/app");
const ConnectDB = require("./src/config/database");

ConnectDB();

app.listen(3000, (req, res) => {
  console.log("server is running on 3000");
});
