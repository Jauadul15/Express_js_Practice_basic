var express=require('express');

var app=express();

app.get('/query',function (req,res) {
    let firstname=req.query.firstname;
    let lastname=req.query.lastname;
    res.end(firstname+' '+lastname);
})
app.listen(6000,function () {
    console.log('server run successful')
})