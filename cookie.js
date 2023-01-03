var express=require('express')
var app=express();

app.get('/',function (req,res) {
    res.cookie('name','jauad');
    res.cookie('age','25');
    res.end('cookie send successful')
})
app.listen(6700);