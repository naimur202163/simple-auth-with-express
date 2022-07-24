const express = require("express");
const User=require('./model/user');
const app = express();

// Middleware
app.use(express.json());



// Registar

app.post('/registar',(req,res)=>{

})



// login
app.post('/login',(req,res)=>{
    
})




module.exports = app;
