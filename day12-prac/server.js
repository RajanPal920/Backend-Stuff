require("dotenv").config();
const app = require("./src/app");
const Connection = require("./src/config/database");

Connection();

app.listen("3000", () => {
  console.log("server is running on 3000");
});
