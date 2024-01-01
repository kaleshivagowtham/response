const express = require('express');
const mongoose = require('mongoose');
const DeliveryVehicles = require('../models/DeliveryVehicles');

const router = express();


router.post('/findVehicle' , (req,res) => {
    const {vehicleType,city } = req.body;
    DeliveryVehicles.findOne({city : city,vehicleType : vehicleType,activeOrdersCount:{$lt:2}})
    .then(foundVehicle => {
        foundVehicle.activeOrdersCount;
        return res.status(200).json(foundVehicle);
        
    })
    return res.status(422).json("Vehicle not available");
})



router.post('/addvehicles' , (req,res) => {
    const {registrationNumber,vehicleType,city,activeOrdersCount } = req.body;
    if(!/^[a-zA-Z0-9]/.test(registrationNumber))
        return res.status(422).json("Please enter a valid registration number(alpha numeric)");
    DeliveryVehicles.findOne({"registrationNumber" : registrationNumber})
    .then(vehicle => {
        if(vehicle)
            return res.status(200).json("A vehicle with the same reg number already exists");
    })
    const deliveryVehicles = new DeliveryVehicles({
        registrationNumber : registrationNumber,
        vehicleType : vehicleType,
        city : city,
        activeOrdersCount : activeOrdersCount
    })
    deliveryVehicles.save().then(saved => {
        if(!saved)
            return res.status(200).json("Couldn't add the item");
        return res.status(200).json("Vehicle added to database");
    })
})

module.exports = router;