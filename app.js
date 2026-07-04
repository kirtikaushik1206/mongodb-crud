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
//To read all users
app.get('/read', async(req,res) =>{
    let users= await userModel.find();
    res.send(users);
})


// to find a specific user
app.get('/read', async(req,res) =>{  //find() => gives array whereas findOne() => gives object
    let users= await userModel.find({username: "ayush"});
    res.send(users);
})


app.listen (3000);