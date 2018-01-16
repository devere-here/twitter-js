const express = require('express')
const app = express()


app.use(function(req,res){
  console.log();
})

app.get('/',function(req,res){
  res.send('Welcome')
})


app.get('/news',function(req,res){
  res.send('New news')
})


//connect to server
app.listen(3000,function(req,res){
  console.log("now listening on port 3000");
})
