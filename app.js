const express = require('express');
const app = express();
const userModel = require ('./usermodel');
app.get('./' , (req,res) => {
    res.send("hey");
})
 
app.get('/create', async(req, res) =>{
  let createduser=  await userModel.create({
        name:" ayush ",
        email: "ayush@gmail.com",
        username: "ayush"
    })
    res.send(createduser);
})

app.get('/update', async(req, res) =>{
 //   userModel.findOneUpdate( findone , update , {new : true})
let updatedUser= await userModel.findOneAndUpdate({ username:"kirti"} , {name: "kirti kaushik"} , {returnDocument: "after" });
      

res.send(updatedUser);

     
})

app.get('/read', async(req,res) =>{
    let users= await userModel.find();
    res.send(users);
})



app.listen (3000);