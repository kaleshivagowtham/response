const mongoose = require('mongoose');

const DeliveryVehiclesSchema = new mongoose.Schema({

    registrationNumber :{
        type : String,
        unique : true,
        match : /^[a-zA-Z0-9]*$/,
        require : true
    },
    VehicleType : {
        type : String,
        enum : ['bike','truck'],
        require : true
    },
    city :{
        type : String,
        require : true
    },
    activeOrdersCount  : {
        type : Number,
        default : 0,
        max : 2,
        require : true
    }
})

module.exports = mongoose.model("DeliveryVehicles",DeliveryVehiclesSchema);