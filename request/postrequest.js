var express=require('express');

var app=express()
app.post('/',function (req,res) {
    res.end('this is simple post request')
})
app.listen(7002);