const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// encript
// app.get('/',(req,res)=>{
//     res.send('hello')

//     bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash('Karan09@', salt, function(err, hash) {
//         console.log(hash);
        
//     });
// });
// })


// decrypt
// app.get('/check',(req,res)=>{
// bcrypt.compare('Karan09@', '$2b$10$jJlPrRhFShAIdlYxiZH3kuYpOkP66mpOp6Sh3mytttcI0IJpELX8u', function(err, result) {
//    console.log(result)
   
// });
// })


// JWT jsonwebtoken 
// let token = jwt.sign({email:'karanjotsingh09@'},'Secret')
// console.log(token)

// let ver  = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmFuam90c2luZ2gwOUAiLCJpYXQiOjE3OTA5NTM4Mjl9.ZHI2CX-Uc8w11N7ahVGt9bUtOzVrHI7jVnA9VS-RNdc','Secret')
// console.log(ver.email)


app.listen('3000')