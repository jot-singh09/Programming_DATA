const express = require('express')
const app = express();

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cookieParser()); 
app.get("/", (req, res) => {
  let token = jwt.sign({ name: "karan" }, "Secret");
  res.cookie("token", token);
  res.send('karan')
});
app.get('/check', (req, res) => {
  let token = req.cookies.token
  let chekc = jwt.verify(token,"Secret")
  console.log(chekc)

})


app.listen(4000)