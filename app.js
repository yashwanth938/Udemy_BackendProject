//import statements 
const express = require('express');
const mongoose= require('mongoose');
//Middlewares
const app = express();
//routs
app.get("/",(req,res)=>{
    res.send("Hello world");
});

//connection and PORT
mongoose.connect(
    "mongodb+srv://yashrongala:<password>@rongalas.cnexybn.mongodb.net/?retryWrites=true&w=majority"
    {
        
        UseNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(()=>{
    console.log("connected to database");
}).catch(err=>{
    console.log(err);
});

app.listen(5000);