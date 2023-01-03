var express=require('express');
var bodyParser = require('body-parser')
var app=express();
app.use(bodyParser.json())

app.post('/',function (req,res) {
    // let jsondata=req.body
    // let jsonstring=JSON.stringify(jsondata);
    // res.end(jsonstring);
    res.end(JSON.stringify(req.body))

})
app.listen(7005);

