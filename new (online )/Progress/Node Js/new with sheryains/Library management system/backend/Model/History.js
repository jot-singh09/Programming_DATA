const mongoose = require("mongoose");

let historySchema = mongoose.Schema({
 name:String,
 type:String,
 bookname:String,
 date:{
    type:Date,
    default:Date.now()
 },
 status:String
});

module.exports = mongoose.model("history", historySchema);
