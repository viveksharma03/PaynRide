var express = require('express');
var router = express.Router();
var pool = require('./pool')
var jwt=require('jsonwebtoken')
//verify jwt token
const verifyJWT = (req, res, next) => {
    console.log(req.headers);
    const token = req.headers.authorization;
    console.log("Token:", token);
  
    if (!token) {
      res.json({ auth: false, message: "We need a token, please give it to us next time" });
      
    } else {
      jwt.verify(token, "jwtSecret", (err, decoded) => {
        console.log(decoded);
        if (err) {
          console.log(err);
          res.json({ auth: false, message: "you are failed to authenticate" });
        } else {
          req.userId = decoded.id;
          next();
        }
      });
    }
  };

//check authentication
  router.get("/isUserAuth", verifyJWT, (req, res) => {
    res.json({ auth: true, message: "you are failed to authenticate2" });
  });


/* GET users listing. */
router.post('/check_admin_login', function (req, res, next) {
    pool.query('select * from administrator where (emailid=? or mobileno=?) and password=?', [req.body.emailid, req.body.emailid, req.body.password], function (error, result) {
        if (error) {
            res.status(500).json({ status: false, message: 'Server Error' });
        }
        else {
            if (result.length == 1) {
                //generate web token
const token=jwt.sign({emailid:result[0].emailid },"jwtSecret",{
    expiresIn:"10s",
})

                res.status(200).json({ status: true,admin:result,token:token });
            }
            else {
                res.status(404).json({ status: false, message: 'Invalid/Mobile Number/Password' });
            }

        }
    })
});

module.exports = router;



