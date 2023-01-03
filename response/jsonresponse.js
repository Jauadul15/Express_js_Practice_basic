//json response
var express=require('express');

var app=express();

app.get('/',function (req,res) {
    var mydata=[
        {
            name:"jauadul karim",
            city:'ctg',
            id:'019'
        },
        {
            name:"minhazul karim",
            city:'ctg',
            id:'016'
        }
    ]
    res.json(mydata)
})
app.listen(8000);