const app = require("./src/app");
const mongoose = require("mongoose")

function connectdb(){
    mongoose.connect("mongodb+srv://palrajan842_db_user:RkjSXSqTeCw8Mpnk@cluster0.u5irscz.mongodb.net/mydb")
    .then(()=>{
        console.log("database is connected..");
        
    })
}

connectdb()

app.listen(3000, () => {
  console.log("server is running");
});
