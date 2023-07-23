var express = require('express');
var router = express.Router();
var pool = require('./pool')
var upload = require('./multer') /* GET home page. */
var fs=require('fs')

router.get('/display_all_category', function (req, res, next) {
    pool.query("select * from category", function (error, result) {
        console.log(result)
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'Server Error' })

        }
        else {
            console.log(result)
            res.status(200).json({ status: true, data: result })

        }
    })

})

router.post('/fetch_all_subcategory_by_category', function (req, res, next) {
    pool.query('select S.*,(select C.categoryname from category C where C.categoryid=S.categoryid) as categoryname from subcategory S where S.categoryid=?', [req.body.categoryid], function (error, result) {
        if (error) {
            console.log(error)
            res.status(500).json({ status: false, message: 'Server Error', result: [] })
        }
        else {
            console.log("result", result)
            res.status(200).json({ status: true, data: result })
        }
    })

});

router.get('/display_all_cities', function (req, res, next) {
    pool.query("select * from cities", function (error, result) {
        console.log(result)
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'Server Error' })

        }
        else {
            console.log(result)
            res.status(200).json({ status: true, data: result })

        }
    })

})
router.get('/all_feature', function (req, res, next) {
    pool.query("select * from featured", function (error, result) {
        console.log(result)
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'Server Error' })

        }
        else {
            console.log(result)
            res.status(200).json({ status: true, data: result })

        }
    })

})

router.get('/get_offers',function(req,res,next){
    pool.query("select * from offers",function(error,result){
    if(error)
    {
        res.status(500).json({status:false,message:'Server Error'})
    }
    else
    {console.log('resulttttt:',result)
        res.status(200).json({status:true, data:result})
    }
    })
    
    })

    router.get('/get_why',function(req,res,next){
        pool.query("select * from whypnp",function(error,result){
        if(error)
        {
            res.status(500).json({status:false,message:'Server Error'})
        }
        else
        {console.log('resulttttt:',result)
            res.status(200).json({status:true, data:result})
        }
        })
        
        })
        router.get('/display_all_vehicle',function(req,res,next){
            pool.query('select V.*,(select C.categoryname from category C where C.categoryid=V.categoryid) as categoryname , (select S.subcategoryname from subcategory S where S.subcategoryid=V.subcategoryid) as subcategoryname , (select P.companyname from company P where P.companyid=V.companyid) as companyname, (select M.modelname from model M where M.modelid=V.modelid) as modelname from vehicle V',function(error,result){
                if (error) {
                    console.log('error',error)
                    res.status(500).json({status:false,message:'Server Error'})
                }
                else{
                    console.log('result',result)
                    res.status(200).json({status:true,data:result})
                }
            })
            
            })


router.get('/all_subcategory', function (req, res, next) {
    pool.query("select * from subcategory", function (error, result) {
        console.log(result)
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'Server Error' })

        }
        else {
            console.log(result)
            res.status(200).json({ status: true, data: result })

        }
    })

})

router.get('/all_company', function (req, res, next) {
    pool.query("select * from company", function (error, result) {
        console.log(result)
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'Server Error' })

        }
        else {
            console.log(result)
            res.status(200).json({ status: true, data: result })

        }
    })

})

router.post('/display_all_vehicle_searching',function(req,res,next){
    pool.query('select V.*,(select C.categoryname from category C where C.categoryid=V.categoryid) as categoryname , (select S.subcategoryname from subcategory S where S.subcategoryid=V.subcategoryid) as subcategoryname , (select P.companyname from company P where P.companyid=V.companyid) as companyname, (select M.modelname from model M where M.modelid=V.modelid) as modelname from vehicle V where V.companyid in(select C.companyid from Company C where C.companyid in(?))',[req.body.companyid],function(error,result){
        if (error) {
            console.log('error',error)
            res.status(500).json({status:false,message:'Server Error'})
        }
        else{
            console.log('result',result)
            res.status(200).json({status:true,data:result})
        }
    })
    
    })

    router.post('/submituserdetails', function (req, res, next) {
        pool.query('insert into userdetails(mobileno, emailid, fullname, birthdate,aadharno,licenseno) values(?,?,?,?,?,?)', [req.body.mobileno, req.body.emailid, req.body.fullname, req.body.birthdate,req.body.aaadharno,req.body.licenseno], function (error, result) {
            if (error) {
                console.log(error)
                res.status(500).json({ status: false, message: 'Server Error' })
            }
            else {
                res.status(200).json({ status: true, message: 'SubCategory Submitted successfully' })
            }
        })
    
    });

    router.post('/check_user_mobileno', function (req, res, next) {
        pool.query('select * from userdetails where mobileno=? ', [req.body.mobileno], function (error, result) {
            if (error) {
                console.log(error)
                res.status(500).json({ status: false, message: 'Server Error' })
            }
            else {
                if(result.length==1){
                    res.status(200).json({ status: true,data:result})

                }
                else{
                    res.status(200).json({ status: false,data:[] })

                }                
            }
        })
    
    });


    router.post('/submitbookingdetails', function (req, res, next) {
        console.log("message",req.body)
        pool.query('insert into bookingdetails( bookingcity, useremail, userphone, bookingstarttime, bookingendtime, totalamount, advancepayment, paymentid, bookingstatus,vehicleid ,vehicleregistrationnum,paymentstatus,deliverylocation) values(?,?,?,?,?,?,?,?,?,?,?,?,?)', [req.body.city, req.body.emailid, req.body.phone, req.body.starttime, req.body.endtime, req.body.totalamount,req.body.advancepayment, req.body.paymentid, req.body.bookingstatus,req.body.registrationnum,req.body.vehicleid,req.body.paymentstatus,req.body.deliverylocation,], function (error, result) {
            if (error) {
                console.log(error)
                res.status(500).json({ status: false, message: 'Server Error' })
            }
            else {
                console.log(result)
                res.status(200).json({ status: true, message: 'SubCategory Submitted successfully' })
            }
        })
    
    });

    router.get('/display_all_booking',function(req,res,next){
        pool.query('select * from bookingdetails ',function(error,result){
            if (error) {
                console.log('error',error)
                res.status(500).json({status:false,message:'Server Error'})
            }
            else{
                console.log('result',result)
                res.status(200).json({status:true,data:result})
            }
        })
        
        })

        router.post('/edit_booking', function (req, res, next) {
            // console.log(req.body.categoryname)
            pool.query('update bookingdetails set bookingstatus=?,paymentstatus=? where bookingid=?', [req.body.bookingstatus, req.body.paymentstatus,req.body.bookingid], function (error, result) {
                if (error) {
                    console.log(error)
                    res.status(500).json({ status: false, message: 'Server Error' })
                }
                else {
        
                    res.status(200).json({ status: true, message: 'Booking Updated successfully' })
                }
            })
        
        });
        
        router.post('/delete_booking', function (req, res, next) {
            // console.log(req.body.categoryname)
            pool.query('delete from bookingdetails  where bookingid=?', [req.body.bookingid], function (error, result) {
                if (error) {
                    console.log(error)
                    res.status(500).json({ status: false, message: 'Server Error' })
                }
                else {
                    res.status(200).json({ status: true, message: 'Booking  successfully Deleted' })
                }
            })
        
        });
module.exports = router;
