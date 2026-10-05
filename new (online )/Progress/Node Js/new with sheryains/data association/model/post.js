const mongoose = require('mongoose')


let postSchema = mongoose.Schema({
   title:String,
   date:{
    type:Date,
    default:Date.now
   },
  users:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  }]
})


module.exports = mongoose.model("post",postSchema)