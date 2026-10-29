const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const cors = require("cors");
const path = require(`path`);
const bookSchema = require("./Model/book");
const userSchema = require("./Model/user");
const historySchema = require("./Model/History");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, `public`)));

app.post("/adminlogin", (req, res) => {
  let username = "Karan";
  let passward = "$2b$10$Uh.j2E1Sry/Zr/UX8ZecIOAeOpRjkQgOqDwMyuduY7U3DkcV8DKgC";
  let isok = false;
  if (req.body.username === username) {
    bcrypt.compare(req.body.passward, passward, (err, result) => {
      if (result === true) {
        isok = true;
        res.json({ message: isok });
      }
    });
  }
});

app.get('/dashboard',async (req, res) => {
  let book = await bookSchema.find()
  let user =await  userSchema.find()
  let history =await  historySchema.find()
  res.json({user,book,history})

})

app.post("/add-book", (req, res) => {
  let { Booktitle, author, copies, desc,type } = req.body;
  bookSchema.create({
    name: Booktitle,
    desc,
    author,
    stock: copies,
    type,
  });
  historySchema.create({
    bookname:Booktitle,
    type:'New book',
    status:'Active',
    name:author,
    
  })
});

app.post("/add-student", (req, res) => {
  console.log(req.body);
  let { name, payment, phoneno, About, course, email } = req.body;
  userSchema.create({
    name,
    course,
    email,
    phoneno,
    security: payment,
    about: About,
  });
});

app.listen(5000, () => {
  console.log("Server starting...");
  console.log("Listening on port 5000");
});
