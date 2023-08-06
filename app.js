//import statements 
const express = require('express');
const mongoose= require('mongoose');
//Middlewares
const app = express();
//routs
app.get("/",(req,res)=>{
    res.send("Hello world");
});


