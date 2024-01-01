const express = require('express');
const mongoose = require('mongoose');
const Item = require('../models/Items');


const router = express();

router.post('/placeorder' , (req,res) => {
    const {orderNum, ItemId, price, customerId, deliveryVehicleId, isDelivered} = req.body;
    
    return res.send({output : "All done"})
})


module.exports = router;