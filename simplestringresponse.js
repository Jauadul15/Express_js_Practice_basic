//simple string response
var express=require('express');

var app=express();
//res.send()-->this response goes in body
//res.end()-->this response is the end of the response
app.get('/',function (req, res) {
    res.send('this is home  string response page')
})
app.post('/about',function (req,res) {
    res.send('this is about string response page')
})
app.listen(7000,function(){
    console.log('server run successful')
})