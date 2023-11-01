const addToCartSchema = require('../models/addToCartSchema');
const productSchema = require('../models/productSchema');
const path = require('path')
const addToCartInsert = async (req, res) => {
    try {
        let productRecord = await productSchema.findById(req.body.id);
        let CheckCart = await addToCartSchema.findOne({ productId: req.body.id })
        if (CheckCart) {
            return res.json({ message: 'product is Already Exists', status: 0 });
        }
        else {
            if (productRecord) {
                let AddToCart = await addToCartSchema.create({
                    productId: req.body.id,
                    product_Name: productRecord.product_Name,
                    product_Price: productRecord.product_Price,
                    product_Description: productRecord.product_Description,
                    product_Qty: productRecord.product_Qty,
                    product_image: productRecord.product_image,
                })
                return res.json({ message: 'product Added in Add To Cart', status: 0 });
            }
            else {
                return res.json({ message: 'product not Added in Add To Cart', status: 0 });
            }
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

const cartViewApi = async (req, res) => {
    try {
        const cartdata = await addToCartSchema.find({});
        if (cartdata) {
            return res.json({ "cartdata": cartdata, status: 1 });
        }
        else {
            return res.json({ messege: "cartdata is no fathed", status: 0 });
        }
    }
    catch (err) {
        console.log(err);
        return false;
    }
}

const cartDeleteApi = async (req, res) => {
    try {
        const id = req.body.id;
        let data = await addToCartSchema.findByIdAndDelete(id);
        if (data) {
            return res.json({ messege: "cart is deleted", status: 1 });
        }
        else {
            return res.json({ messege: "cart is not deleted", status: 0 });
        }
    }
    catch (err) {
        console.log(err);
        return false;
    }
}

const cartupdateApi = async (req, res) => {
    try {
        const { id, categoryId, subcategoryId, product, price, quantity, description } = req.body;
        console.log(req.file);
        if (req.file) {
            const image = req.file.path;
            const data = await addToCartSchema.findByIdAndUpdate(id,
                { categoryId: categoryId, subcategoryId: subcategoryId, product: product, quantity: quantity, description: description, price: price, image: image });
            if (data) {
                return res.json({ message: "Product is updated", status: 1 });
            } else {
                return res.json({ message: "Product is not updated", status: 0 });
            }
        } else {
            return res.json({ message: "No file was uploaded", status: 0 });
        }
    }
    catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
    addToCartInsert,
    cartViewApi,
    cartDeleteApi,
    cartupdateApi
}