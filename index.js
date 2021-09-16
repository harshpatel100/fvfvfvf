const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const staticpath = path.join(__dirname,"../public");
const t = path.join(__dirname,"../t/views");
const p = path.join(__dirname,"../t/partial");

app.set("view engine","hbs");
app.set('views',t);
hbs.registerPartials(p)
app.use(express.static(staticpath));
app.get("/",(req,res)=>{
  res.render('index');
});


app.get("/",(req,res)=>{
  res.send("hellow");
});

app.get('/about/*',(req,res)=>{
  res.render("404",{
    errorcoment: "not found"
  });
})

app.listen(8000,()=>{
  console.log("yess...");
});