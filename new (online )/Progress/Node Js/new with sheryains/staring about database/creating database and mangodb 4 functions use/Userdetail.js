let mongoos =  require('mongoose')

mongoos.connect('mongodb://127.0.0.1:27017/mdb')

let userdetail = new mongoos.Schema({
    name: String,
    email: String,
    username: String,
});

module.exports = mongoos.model("user",userdetail);