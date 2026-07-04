const express = require('express');
const app = express();
const userModel = require ('./usermodel');
app.get('./' , (req,res) => {
    res.send("hey");
})
 
app.get('/create ', async(req, res) =>{
  let createduser=  await userModel.create({
        name:" Kirti ",
        email: "kirti@gmail.com",
        username: "kirti"
    })
    res.send(createduser);
})


app.listen (3000);