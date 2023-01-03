var express=require('express');

var app=express()
app.post('/',function (req,res) {
    let username=req.header('userid');
    let password=req.header('pass')
    let mbl=req.header('mobile')
    res.end(username+" "+password+' '+mbl);
})
app.listen(7002);