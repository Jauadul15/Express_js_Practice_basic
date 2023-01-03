//express routing
var express=require('express');

app=express();
//get method
app.get('/',function (req,res) {
    res.send('this is home page')
})
//post method
app.post('/about',function (req,res) {
    res.send('this is about page')
})
//put method
app.put('/terms',function (req,res) {
    res.send('this is term page')
})
//delete method
app.delete('/contact',function (req,res) {
    res.send('this is contact page')
})
app.listen(7000,function () {
    console.log('server run successful')
})
