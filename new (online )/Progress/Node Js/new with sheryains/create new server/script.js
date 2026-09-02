const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("hello");
  next();
});
app.get("/", (req, res) => {
  res.send("hello this  is / page");
});
app.get("/about", (req, res) => {
  res.send(" this  is /about page");
});

app.listen(3000);
