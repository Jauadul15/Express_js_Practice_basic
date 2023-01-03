var express=require('express');

var app=express();
 app.get('/',function (req,res) {
     res.send('this is simple get request')
 })
app.listen(8000);