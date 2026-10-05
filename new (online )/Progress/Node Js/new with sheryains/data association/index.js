const express = require("express");
const app = express();
const path = require(`path`);
const Usermodal = require("./model/user");
const Postmodal = require("./model/post");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, `public`)));
app.set(`view engine`, `ejs`);

app.get("/createuser", async (req, res) => {
  let user = await Usermodal.create({
    name: "Karan",
    username: "karan",
    passward: "karan09@",
  });
  res.send(user);
});

app.get("/postcreate", async (req, res) => {
  let user = await Usermodal.findOne({ _id: "6ac133ddea1609618e26a640" });
  let post = await Postmodal.create({
    title: "Legend sidhu moose ala",
    users: user._id,
  });
  user.post.push(post._id);
  user.save();
  res.send([user,post ]);
});

app.listen(3000, () => {
  console.log("Server starting...");
  console.log("Listening on port 3000");
});
