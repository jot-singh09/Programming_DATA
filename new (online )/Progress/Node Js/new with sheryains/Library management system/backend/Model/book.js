const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/liabrary')

let bookSchema = mongoose.Schema({
    name:String,
    desc:String,
    stock:Number,
    author:String,
    type:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
})

module.exports = mongoose.model('book',bookSchema);
