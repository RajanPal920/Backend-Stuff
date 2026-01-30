require("dotenv").config();
const app = require("./src/app");
const Connectdb = require("./src/config/database");

Connectdb();

app.listen(3000, () => {
  console.log("server is running on 3000");
});
