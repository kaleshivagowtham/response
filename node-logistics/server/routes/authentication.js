const express = require('express')
const Customers = require('../models/Customers')

router.post('/signin' , (req,res) => {
    const {username, password} = req.body;
    if(!username || !password)
        return res.status(422).json("");
})


const router = express();