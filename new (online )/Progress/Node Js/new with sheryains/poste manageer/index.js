const express = require("express");
const app = express();
const path = require(`path`);
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const { log } = require("console");
const userDetail = require("./model/user");
const PostDetail = require("./model/post");
const { get } = require("http");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, `public`)));
app.set(`view engine`, `ejs`);

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/register", (req, res) => {
  let { name, username, age, email, passward } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(passward, salt, (err, hash) => {
      userDetail.create({
        name,
        email,
        age,
        username,
        passward: hash,
      });
      let token = jwt.sign({ email, username }, "Secret");
      res.cookie("token", token);
      res.redirect("/home");
    });
  });
});

function checklogin(req, res, next) {
  let cookie = req.cookies.token;
  if (cookie == "") {
    res.send("Login first");
  } else {
    let data = jwt.verify(cookie, "Secret");
    req.user = data;
    next();
  }
}

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  let { email, passward } = req.body;
  let user = await userDetail.findOne({ email });
  bcrypt.compare(passward, user.passward, (err, result) => {
    if (result == true) {
      let token = jwt.sign({ email, username: user.username }, "Secret");
      res.cookie("token", token);
      res.status(200).redirect("/home");
    }
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.send("hello");
});

app.get("/home", checklogin, async (req, res) => {
  let user = await userDetail
    .findOne({ email: req.user.email })
    .populate("post");
  res.render("Home", { user });
});

app.post("/createpost/:userid", async (req, res) => {
  let user = await userDetail.findOne({ _id: req.params.userid });
  let post = await PostDetail.create({
    user: user._id,
    content: req.body.content,
  });
  user.post.push(post._id);
  await user.save();
  res.redirect('/home')
});
app.get("/edit/:postid", async (req, res) => {
  let post = await PostDetail.findOne({ _id: req.params.postid });
  // res.send(user)
  res.render("edit", { post });
});
app.post("/editpost/:postid", async (req, res) => {
  let user = await PostDetail.findOneAndUpdate(
    { _id: req.params.postid },
    { content: req.body.content },
  );
  res.redirect("/home");
});


app.get("/delete/:postid",async (req, res) => {
  let post = await PostDetail.findOneAndDelete({_id: req.params.postid})
  // res.send(user)
  res.redirect("/home");
});
app.listen(3000, () => {
  console.log("Server starting...");
  console.log("Listening on port 3000");
});
