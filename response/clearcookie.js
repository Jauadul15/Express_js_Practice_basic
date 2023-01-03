var express=require('express')
var app=express();

app.get('/',function (req,res) {
    res.clearCookie('name');
    res.clearCookie('age')
    res.end('cookie clear successful')
})
app.listen(6800);