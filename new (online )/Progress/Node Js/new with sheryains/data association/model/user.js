const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/learing')

let userSchema = mongoose.Schema({
    name : String,
    username: String,
    passward: String,
    post : [
        {type:mongoose.Schema.Types.ObjectId,
            ref:"post"
        }
    ]
})


module.exports = mongoose.model("user",userSchema)