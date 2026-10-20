const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  name: String,
  course: String,
  security: Number,
  Book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "book",
  },
});

module.exports = mongoose.model("user", userSchema);
