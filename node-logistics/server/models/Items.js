const mongoose = require('mongoose');

const ItemsSchema = new mongoose.Schema({

    name :{
        type : String,
        require : true
    },
    price : {
        type : Number,
        require : true
    }
})


module.exports = mongoose.model("Items",ItemsSchema);