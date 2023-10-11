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

const productViewApi = async (req,res) => {
    try{
        let productView = await productSchema.find({}).populate('subcategoryId').populate('categoryId');
        if(productView){
            return res.json({message : productView , status : 1});
        }
        else{
            return res.json({message : 'Category Not Fetch' , status : 0});
        }
    }
    catch(error){
        console.log(error);
        return false;
    }
}

const productDeleteApi = async (req,res) => {
    try{
        let DeleteId = req.body.id;
        let productDelete = await productSchema.findByIdAndDelete(DeleteId);
        if(productDelete){
            return res.json({message : 'product Delete' , status : 1});
        }
        else{
            return res.json({message : 'product not Delete' , status : 0});
        }
    }
    catch(error){
        console.log(error);
        return false;
    }
}

const productupdateApi = async (req,res) => {
    try{
        const {categoryId,subcategoryId,product_Name,product_Price,product_Description,product_Qty} = req.body;
        let updateId = req.body.id;
        let productUpdate =  await productSchema.findByIdAndUpdate(updateId,{
            categoryId: categoryId,
            subcategoryId: subcategoryId,
            product_Name: product_Name,
            product_Price: product_Price,
            product_Qty: product_Qty,
            product_Description: product_Description,
        });        
        if(productUpdate){
            return res.json({message : 'product Update' , status : 1});
        }
        else{
            return res.json({message : 'product not Update' , status : 0});
        }
    }
    catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
    productInsertApi,
    productViewApi,
    productDeleteApi,
    productupdateApi
}