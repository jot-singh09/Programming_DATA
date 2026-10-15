const express = require("express");
const app = express();
const path = require(`path`);
const cors = require("cors");
const bcrypt = require("bcrypt");
const UserDetail = require("./model/db");
const jwt = require("jsonwebtoken");
const cookieParder = require('cookie-parser')


app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true, // 
  }),
);
app.use(cookieParder());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, `public`)));
// app.set(`view engine`, `ejs`)

app.get("/admin/data", async (req, res) => {
  let accounts = await UserDetail.find();

  let amo = 0;
  for (const acc of accounts) {
    amo += acc.Balance || 0;
  }

  res.json({ accounts, amo });
});
app.post("/register", (req, res) => {
  let { name, email, passward, age, acctype } = req.body;
  bcrypt.genSalt(10, async function (err, salt) {
    await bcrypt.hash(passward, salt, async function (err, hash) {
      let user = await UserDetail.create({
        name,
        email,
        passward: hash,
        age,
        acctype,
      });
      console.log("user created ");
      let finduser = await UserDetail.findOne({ email: email });
      let token = jwt.sign(
        { email: finduser.email, _id: finduser._id },
        "Secret",
      );
      res.cookie("token", token);
      res.json({ message: "Registered" });
    });
  });
});
let admin = "Karan";
let passwad = "Karan09@";
let sucess = false;
app.post("/adminlogin", (req, res) => {
  let { name, passward } = req.body;
  if (name == admin) {
    if (passwad == passward) {
      res.cookie("login", "Logintoadminissucessfullwithbank");
      sucess=true
      res.json({ message: "sucess" });
    } else {
      res.json({ message: "incorrect" });
      sucess=false
    }
  } else {
    res.json({ message: "incorrect" });
    sucess=false
  }
});

app.get('/checklogin', (req, res) => {
  res.json({isok:sucess})
})
app.get('/checkcookies', (req, res) => {
  let token = req.cookies.login
  if (token != null) {
    console.log('hello')
    res.json({message:'Log'})
  }
  else {
    res.json({message:'NotLog'})
  }
})
app.listen(5000, () => {
  console.log("Server starting...");
  console.log("Listening on port 3000");
});
