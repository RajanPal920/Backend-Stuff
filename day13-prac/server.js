require("dotenv").config();
const app = require("./src/app");
const ConnectToDB = require("./src/config/database");

ConnectToDB();

app.listen(3000, (req, res) => {
  console.log("Server is running");
});
