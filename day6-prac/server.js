const app = require("./src/app")
const mongoose = require("mongoose")

function Database(){
    mongoose.connect("mongoose:url-prac").then(()=>{
        console.log("database is running");
        
    })
}

Database()


app.listen(3000,()=>{
    console.log("server is running");
    
})