const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderNumber : {
        type : String,
        unique : true,
        require : true
    },
    itemId : {
        type : mongoose.Schema.Types.ObjectId,
        require : true
    },
    price : {
        type : Number,
        require : true
    },
    customerId : {
        type : mongoose.Schema.Types.ObjectId,
        require : true
    },
    deliveryVehicle : {
        type : mongoose.Schema.Types.OnjectId,
        require : true
    },
    idDelivered : {
        type : Boolean,
        default : false,
        require : true
    }
})

module.exports = mongoose.model("Order" , OrderSchema);