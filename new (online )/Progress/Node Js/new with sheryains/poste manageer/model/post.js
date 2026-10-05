const mongoose = require('mongoose')

let Postschema  = mongoose.Schema({
    content:String,
    date:{
        type:Date,
        default:Date.now
    },
    user:[
        {
            type:mongoose.Schema.Types.ObjectId,ref:'user'
        }
    ]
})

module.exports =  mongoose.model('post',Postschema);