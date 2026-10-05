const express = require("express");
const app = express();
const path = require(`path`);
const cookieParser = require("cookie-parser");
const userDetail = require("./model/userdetail.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, `public`)));
app.set(`view engine`, `ejs`);

app.get("/", (req, res) => {
  let token = req.cookies.token
  console.log(token)
  

  if (token){
    res.send('/home')
  }
  else{
    console.log('false')
    
  }
  // res.redirect("/register");
});

app.get("/register", (req, res) => {
  res.render("index");
});

app.post("/register/createuser", async (req, res) => {
  let { name, username, passward } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(passward, salt);

  let user = await userDetail.create({
    name,
    username,
    passward: hash,
  });

  let token = jwt.sign({ username }, "Sehh");
  res.cookie("token", token);
  console.log(req.cookies)
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login/processing", async (req, res) => {
  let { username, passward } = req.body;
  let finduser = await userDetail.findOne({ username });
  await bcrypt.compare(passward, finduser.passward, (err, result) => {
    if (result == true) {
      res.redirect("/home");
    } else {
    }
  });
});

app.get("/home", (req, res) => {
  res.send("welcome");
});

app.listen(3000, () => {
  console.log("Server starting...");
  console.log("Listening on port 3000");
});
