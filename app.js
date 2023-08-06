//import statements 
const express = require('express');
const mongoose= require('mongoose');
const router = require('./routes/product-routs');
//Middlewares
const app = express();
//routs
app.use('/products',router);


//connection and PORT
mongoose.connect(
    "mongodb+srv://yashrongala:4WPONqYUtTv6y2l1@rongalas.cnexybn.mongodb.net/?retryWrites=true&w=majority",
   
).then(()=>{
    console.log("connected to database");
}).catch(err=>{
    console.log(err);
});

app.listen(5000);


// passcode:4WPONqYUtTv6y2l1