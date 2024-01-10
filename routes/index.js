const bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/submit", async function (req, res, next) {
  const userData = await userModel.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    message: req.body.message
  });

  //console.log(username,email,password,message);
  res.render("successful",{val1:8});
});

router.get("/checkData", async function (req, res, next) {
  let users = await userModel.find({}); //find all data
  // res.send(users);
  //const dataDisplay = document.querySelector(".allDataDisplay");
  // users.forEach((item, index) => {
  //   const htmlData = `
  //       <div class="modelData">
  //           <div><p>Name</p><h3>${item.username}</h3></div>
  //           <div><p>Email</p><h3>${item.email}</h3></div>
  //           <div><p>Password</p><h3>${item.password}</h3></div>
  //           <div><p>Message</p><h3>${item.message}</h3></div>
  //       </div>
  //       `

  //   //dataDisplay.innerHTML=""
  //   dataDisplay.insertAdjacentHTML("afterbegin", htmlData);
  // });

  res.render("showAllData",{user:users});
});


module.exports = router;
