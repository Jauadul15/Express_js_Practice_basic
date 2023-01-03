var express=require('express');

var app=express()
app.post('/',function (req,res) {
    let firstname=req.query.firstname;
    let lastname=req.query.lastname;
    res.end(firstname+" "+lastname);
})
app.listen(7002);