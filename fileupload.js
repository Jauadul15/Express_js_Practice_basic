var express=require('express');
var multer=require('multer')
var Upload_folder='./uploads/';
var upload=multer({
    dest:Upload_folder,
    limits:{
        fileSize:3000000,//3MB
    },
    fileFilter:function (req,file,cb) {
        if(file.mimetype==='image/png'||
            file.mimetype==='image/jpg'||
            file.mimetype==='image/jpeg'){
            cb(null,true);
        }else{
            //cb(null,false)
            cb(new Error("Only .jpg, .png or .jpeg format allowed"));
        }
    }
})
var app=express();

app.post('/',upload.fields([
    {name:'myfile',maxCount:1},
    {name:'newone',maxCount:1}
]),function (req, res) {
    res.send('hiii')
})
app.use(function (err, req, res, next) {
    if(err){
        if(err instanceof multer.MulterError){
            res.status(500).send('there was an upload error!!');
        }else{
            res.status(500).send(err.message);
        }
    }
    else{
        res.send('successful')
    }
})
app.listen(7007,function () {
    console.log('server run successful')
})
