const { urlencoded } = require("body-parser"); 
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const hostname = "192.168.1.11"; // Replace with your actual local IP

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.redirect("/login");
});
app.get("/register", (req, res) => {
  res.render("register", { message: "" });
});

app.post("/register", (req, res) => {
  fs.readFile(`./files/${req.body.username}_username`, "utf-8", (err) => {
    if (err) {
      fs.writeFile(
        `./files/${req.body.username}_username`,
        req.body.username,
        (err) => {
          fs.writeFile(
            `./files/${req.body.username}_passward`,
            req.body.pass,
            (err) => {
              fs.mkdir(`./files/${req.body.username}`, (err) => {
                if (err) {
                  console.log("Error creating folder:", err);
                }
              });
              res.redirect("/");
            },
          );
        },
      );
    } else {
      res.render("register", { message: "User Aleady Exist" });
    }
  });
});
app.get("/login", (req, res) => {
  res.render("login", { message: "", response: "" });
});
let UserName = "";

app.post("/login", (req, res) => {
  const inpname = req.body.username;
  UserName = inpname;
  // console.log(UserName)
  // let response = ''
  let checkpass = false;
  const inpass = req.body.pass;

  const name = fs.readFile(
    `./files/${inpname}_username`,
    "utf-8",
    (err, files) => {
      if (err) {
        res.render("login", { message: "User not found" });
      } else {
        const passward = fs.readFile(
          `./files/${inpname}_passward`,
          "utf-8",
          (err, file) => {
            if (err) console.log(err);
            else {
              if (inpass == file) {
                //    localStorage.setItem('Islogin', userName);
                res.redirect("/dashboard");
                checkpass = false;
              } else if (inpass != file) {
                checkpass = true;
                res.render("login", { message: "Incorrect passward" });
              }
            }
          },
        );
      }
    },
  );
});

app.get("/dashboard", (req, res) => {
  let setletter = UserName.split("");
if (setletter== ''){
  res.redirect('/')
}
else{
  
  fs.readdir(`./files/${UserName}`, (err, files) => {
    const read = fs.readFile(`./files${UserName}`, "utf-8", (val, filedata) => {
      res.render("Dashboard", { Username: UserName, letter: setletter,files: files, filedata: filedata });
     files.forEach( (val)=>{
      val.replace('.txt', '')
      console.log(val)
     })
      
      });
    });
  


//   fs.readdir(`./files/${UserName}`, 'utf-8', (err, files) => {
//     if (err) console.log(err)
//       else {
    
//     files.map((val)=>{
      
      
//       fs.readFile(`./files/${UserName}/${val}`,'utf-8',(err,filedata)=>{
//         console.log(filedata)
//       })
      
//     })
    
//   }
// });
}
});

app.post("/createtask", (req, res) => {
  console.log(req.body);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
