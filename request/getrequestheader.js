var express=require('express');
var app=express();

app.get('/',function (req,res) {
    let name=req.header('name')
    let Connection=req.header('Connection')
    res.end(name+' '+Connection);
})
app.listen(7001);