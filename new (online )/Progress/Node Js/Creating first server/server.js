const express = require("express")
const server = express()
server.get("/",(req,res)=>{
    
    res.send("Hello from Node.js server!");
})

server.get("/about" , (req,res)=>{
    res.send("About Pgaes")
})

server.listen(3000 , ()=>{
    console.log('server runned')
})