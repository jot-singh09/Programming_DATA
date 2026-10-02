const express = require('express')
const app = express();
const UserModal = require('./Userdetail')

app.get('/',(req,res)=>{
    res.send('hello')
})


app.get('/create', async (req,res)=>{
    let createduser = await UserModal.create({
        name:"raman",
        username:"raman",
        email:"raman@gmail.com"
    })
    res.send(createduser)
})

app.get('/read', async (req,res)=>{
    let createduser = await UserModal.find();
    res.send(createduser)
})


app.get('/update', async (req,res)=>{
    let createduser = await UserModal.findOneAndUpdate({username:"karan"},{name:"Karanjot singh"},{new:true})
    res.send(createduser)
})

app.get('/delete', async (req,res)=>{
    let createduser = await UserModal.findOneAndDelete({username:"karan"})
    res.send(createduser)
})




app.listen(3000)