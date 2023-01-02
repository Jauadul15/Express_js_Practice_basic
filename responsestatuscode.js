//response status code
var express=require('express');

var app=express();

app.get('/',function (req,res) {
    res.status(201).end('created')
})
app.listen(6078);