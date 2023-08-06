const express = require('express');
const product=require("../Model/Product");
const router = express.router();

router.get("/",async(req,res,next)=> {
    let product = await product.find();

    if(!products){
        return res.status(404).json({message:'No products'})
    }
    res.status(200).json({products})
});

module.exports = router;




