var express=require('express');

var app=express();

app.use(function (req, res, next) {
    console.log('this is middleware')
    next();
})
app.get('/',function (req, res) {
    res.send('this is home page')
})
app.get('/term',function (req, res) {
    res.send('this is term page')
})
app.get('/contact',function (req, res) {
    res.send('this is contact page')
})
app.listen(5000,function () {
    console.log('server run seccessful');
})
