
//create a basic expressjs application
var express=require('express');
var app=express();
//get method
app.get('/',function (req,res) {
    res.send('this is express js first home page')
})
app.listen(6066,function () {
    console.log('server run successful')
})