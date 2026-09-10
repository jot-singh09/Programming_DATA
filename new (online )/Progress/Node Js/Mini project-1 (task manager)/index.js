const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    const read = fs.readFile("./files", "utf-8", (val, filedata) => {
      res.render("index", { files: files, filedata: filedata });
    });
  });
});
app.post("/create", (req, res) => {
  fs.writeFile(`./files/${req.body.title}`, req.body.desc, (err) => {
    res.redirect("/");
  });
});
app.get("/file/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    res.render("show", { name: req.params.filename, data: filedata });
  });
});

app.listen(5000);
