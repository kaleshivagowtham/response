const express = require('express');
const mongoose = require('mongoose');
const Items = require('../models/Items');

const router = express();

router.post('/additems' , (req,res) => {
    const {name,price} = req.body;
    console.log(name);
    console.log(price);
    Items.findOne({name : name})
    .then(foundItem => {
        
        console.log(foundItem);
        return res.status(422).json("Item already exists");
    })
    const item = new Items({
        name : name,
        price : price
    })
    item.save().then(saved => {
        if(!saved)
            return res.status(200).json("Couldn't add the item");
        return res.status(200).json("Item added to database");
    })
})

module.exports = router;