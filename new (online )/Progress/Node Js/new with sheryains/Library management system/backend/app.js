const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const cors = require("cors");
app.use(cors());
const path = require(`path`);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, `public`)));

app.post("/adminlogin", (req, res) => {
  let username = "Karan";
  let passward = "$2b$10$Uh.j2E1Sry/Zr/UX8ZecIOAeOpRjkQgOqDwMyuduY7U3DkcV8DKgC";
  let isok = false;
  if (req.body.username === username) {
    bcrypt.compare(req.body.passward, passward, (err, result) => {
      if (result===true){isok = true; 
        res.json({message:isok})
      }
      
    });
  }
});
app.listen(5000, () => {
  console.log("Server starting...");
  console.log("Listening on port 5000");
});
