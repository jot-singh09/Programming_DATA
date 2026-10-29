const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  name: String,
  course: String,
  security: Number,
  about:String,
  Book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "book",
  },
  email:String,
  phoneno:Number,
});

module.exports = mongoose.model("user", userSchema);
