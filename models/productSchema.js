const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'category'
    },
    subcategoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'subcategory'
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

const product = mongoose.model('product',productSchema);
module.exports = product;