const mongoose = require('mongoose');\


const Schema = mongoose = mongoose.Schema;

const productSchema =new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    imgURL:{
        type:String,
        required:true,
    },
})

