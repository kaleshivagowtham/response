const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({

    name : {
        type : String,
        require : true
    },
    city : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model("Customer" , CustomerSchema);