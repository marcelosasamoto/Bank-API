const mongoose = require('mongoose');

const CardScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    valid_until:{
        type:Date,
        required:true
    },
    cardtype:{
        type:String,
        default:"VISA",
        required:true
    },
    cvv:{
        type:Number,
        required:true
    },
    active:{
        type:Boolean,
        default:true
    }

})


module.exports = CardScheme;