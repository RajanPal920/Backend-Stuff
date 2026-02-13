require("dotenv").config();

const app = require("./src/app");
const ConnectToDatabase = require("./src/config/database");

ConnectToDatabase();

app.listen(3000, () => {
  console.log("server is running ");
});
