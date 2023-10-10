const productSchema = require('../models/productSchema');

const productInsertApi = async (req, res) => {
    try {
        const {categoryId,subcategoryId,product_Name,product_Price,product_Description,product_Qty} = req.body;
        if (req.file) {
            let productInsert = await productSchema.create({
                categoryId: categoryId,
                subcategoryId: subcategoryId,
                product_Name: product_Name,
                product_Price: product_Price,
                product_Qty: product_Qty,
                product_Description: product_Description,
                product_image: req.file.path
            });
            if (productInsert) {
                return res.json({ message: 'Product Inserted', status: 1 });
            }
            else {
                return res.json({ message: 'Product not Inserted', status: 1 });
            }
        }
        else{
            return res.json({ message: 'Image not Fetch', status: 1 });
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    productInsertApi
}