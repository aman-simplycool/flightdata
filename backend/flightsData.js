const mongoose = require('mongoose');
const flightSchema= new mongoose.Schema({
    source:{
        type:String,
        required: true,
    },
    destination:{
        type:String,
        required:true,
    },
    price:{
        type:Int32Array,
        reuqired:true
    },
    date:{
        type:new Date(),
        requrired:true
    }
});
const flightData=mongoose.model('flightData',flightSchema);

module.exports = flightData;