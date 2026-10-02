const mongoos = require("mongoose");
mongoos.connect("mongodb://127.0.0.1:27017/usersetup");
let userDetail = new mongoos.Schema({
  name: String,
  email: String,
  image: String,
});

module.exports = mongoos.model('user',userDetail);
