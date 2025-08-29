const mongoose = require('mongoose')

const productScheme =new mongoose.Schema({
    name:{
        type:String,
        required:[true,'products name must be provided'],
    },
     price:{
        type:Number,
        required:[true,'products price must be provided'],
    },
    feature:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.5,

    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
     company:{
        type:String,
        enum:{
        values: ['tata', 'mahindra', 'flite', 'marcos', 'liddy', 'ikea', 'caressa'],
            message:'{VALUE} is not support',
        },

    }
            // enum:['tata','mahindra','flite','marcos']//enum ka matlb optn

})
module.exports =mongoose.model('Products',productScheme)