var express=require('express');
var app=express();

app.get('/',function (req,res) {
    res.send('this is home page')
})
app.get('/download',function (req,res) {
    res.download('./upload/carbon.png')
})
app.get('/redirect',function (req,res) {
    res.redirect('http://localhost:8000/download')
})
app.listen(8000)