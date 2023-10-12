const mongoose = require('mongoose');
const adddTocartSchema = mongoose.Schema({
    productId : {
        type : String,
        required : true
    },
    product_Name : {
        type : String,
        required : true
    },
    product_Price : {
        type : String,
        required : true
    },
    product_Description : {
        type : String,
        required : true
    },
    product_Qty: {
        type : String,
        required : true
    },
    product_image : {
        type : String,
        required : true
    }
})

const AddToCart = mongoose.model('AddToCart',adddTocartSchema);
module.exports = AddToCart;