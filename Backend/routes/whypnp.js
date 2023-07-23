var express = require('express');
var router =  express.Router();
var pool=require('./pool')
var upload=require('./multer');
var fs=require('fs')
const { fromString } = require('uuidv4');



router.post('/whypnpsubmit',upload.any(), function(req, res, next) {
 
    pool.query("insert into whypnp (tittle,description,image) values(?,?,?)",
    
       [ req.body.title,
        req.body.discription,
        req.files[0].filename]
    ,function(error,result){
        
        if(error)
        {
            res.status(500).json({status:false,message:'Server Error'})
        }
        else{
            res.status(200).json({status:true,message:'pnp Submitted Successfully'})
        }
    })
});
module.exports=router;
