const bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.use(bodyParser.urlencoded({extended:false}));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/submit",async function(req,res,next){
  const userData = await userModel.create({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
    message:req.body.message
  });

  //console.log(username,email,password,message);
  res.send(userData);
});

router.get("/checkData",function(req,res,next){
    res.send(userData);
});


module.exports = router;
