const express = require("express");

const app = express();
app.use(express.json());

const data = [];

app.post("/data", (req, res) => {
  data.push(req.body);
  console.log(req.body);

  res.send("POST request to the homepage");
});

app.get("/data",(req,res)=>{
    res.json(data);
   
})

app.delete("/data/:index",(req,res)=>{
   delete data[req.params.index] 
   res.send("deleted")
})

app.patch("/data/:index",(req,res)=>{
    data[req.params.index].desc = req.body.desc
    res.send("updated")
})

app.put("/data/:index",(req,res)=>{
    data[req.params.index].title = req.body.title
    data[req.params.index].desc =req.body.desc
    res.send("fully updated") 
})

module.exports = app;
