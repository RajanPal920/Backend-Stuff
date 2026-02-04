
const mongoose = require("mongoose")

function ConnectDb(){
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connect to Database");
        
    })
}


module.exports = ConnectDb