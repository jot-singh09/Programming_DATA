const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bankingapp");

let UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  minoracc: String,
  passward: String,
  acctype: String,
  email:String,
  history: {
    type: mongoose.Schema.Types.ObjectId,
  },
  openingdate: String,
  Balance: {
    type: Number,
    default: 2500,
  },
});

module.exports = mongoose.model("user", UserSchema);
