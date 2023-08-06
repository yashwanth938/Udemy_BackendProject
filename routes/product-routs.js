const express = require('express');
const Product=require("../Model/Product");
const router = express.Router();

router.get("/",async(req,res,next)=> {
    let products = await Product.find();

    if(!products){
        return res.status(404).json({message:'No products'})
    }
    res.status(200).json({products})
});

module.exports = router;



