const express = require("express");
const app = express();
const userDetail = require("./userserver");
const path = require("path");
let port = 4000;
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.redirect("/register");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  let imageset = "";
  if (req.body.image.length > 0) {
    imageset = req.body.image;
  } else {
    imageset =
      "https://imgs.search.brave.com/3zIZym4fIMgOv3eqJSITU0hqprzmyE2jJvPk45jmFzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FkL2Uy/L2UxL2FkZTJlMTYz/NzgxZDI3OGQwMGRi/NDE1OGI4NDdiZWI5/LmpwZw";
  }
  let createduser = await userDetail.create({
    name: req.body.name,
    email: req.body.email,
    image: imageset,
  });
  console.log(createduser);

  res.redirect("/read");
});

app.get("/read", async (req, res) => {
  // await userDetail.findOneAndDelete({name:'Karan'})
  let user = await userDetail.find();
  res.render("read", { user: user });
  //  res.send(user)
});
app.get("/edit/:userid", async (req, res) => {
  let user = await userDetail.findOne({ _id: req.params.userid });
  res.render("edit", { user });
});

app.post("/edit/update/:userid", async (req, res) => {
  let setimage = "";
  if (req.body.image.length > 0) {
    setimage = req.body.image;
  } else {
    setimage =
      "https://imgs.search.brave.com/3zIZym4fIMgOv3eqJSITU0hqprzmyE2jJvPk45jmFzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FkL2Uy/L2UxL2FkZTJlMTYz/NzgxZDI3OGQwMGRi/NDE1OGI4NDdiZWI5/LmpwZw";
  }

  let Updateuser = await userDetail.findOneAndUpdate(
    { _id: req.params.userid },
    { name: req.body.name, email: req.body.email, image: setimage },
  );
  res.redirect('/read')
});

app.get('/delete/:userid',async (req,res)=>{
await userDetail.findOneAndDelete({_id:req.params.userid})
res.redirect('/read')

})

app.listen(port, () => {
  console.log(`The server is running on localhost:${port}`);
});
