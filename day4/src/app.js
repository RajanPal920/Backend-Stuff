const express = require("express");

const app = express();
app.use(express.json());

const data = [];

app.post("/data", (req, res) => {
  data.push(req.body);
  res.send("Data received");
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.delete("/data/:index",(req,res)=>{
    delete data[req.params.index]
    res.send("Data deleted");
})

app.patch("/data/:index",(req,res)=>{
    data[req.params.index].desc = req.body.desc;
    res.send("Data updated");
})

app.put("/data/:index",(req,res)=>{
    data[req.params.index].title = req.body.title;
    data[req.params.index].desc = req.body.desc;
    res.send("Data replaced");
})


module.exports = app;
