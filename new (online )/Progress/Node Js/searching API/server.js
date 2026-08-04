const express = require("express")
const server = require("./src/app")
server.use(express.json()) 

server.post("/note", (req, res) => {
    console.log("Note endpoint hit!")
    console.log(req.body)  // ✅ Change from res.body to req.body
    res.json({ 
        message: "Note received!",
        data: req.body   // ✅ Also include the data in response
    })
})

server.listen(3000, () => {
    console.log("server runn")
})