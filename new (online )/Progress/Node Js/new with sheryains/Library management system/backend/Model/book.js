const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/liabrary')

let bookSchema = mongoose.Schema({
    name:String,
    Desc:String,
    Stock:Number,
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
})

module.exports = mongoose.model('book',bookSchema);
