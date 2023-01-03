var express=require('express');

var app=express();

app.get('/',function (req,res) {
    res.append('name','jauadul karim')
    res.append('city','ctg')
    res.append('age','25')
    res.status(201).end('this is home page')
})
app.listen(6000,function () {
    console.log('server run successful')
})
