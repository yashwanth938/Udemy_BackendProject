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

router.post("/",async(res,req,next)=>{
    let product = new Product({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        imgURL:req.body.imgURL,
        quantity:req.body.quantity,
        isFeatured:req.body.isFeatured,
              
    });
    product=await prouuct.save();


    if(!product){
        return res.status(500).json({message:"cannot add product"})
    }


    res.status(201).json({product});
});



module.exports = router;



