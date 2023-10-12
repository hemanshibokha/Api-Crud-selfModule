const addToCartSchema = require('../models/addToCartSchema');
const productSchema = require('../models/productSchema');
const addToCartInsert = async (req,res) => {
    try{
        let productRecord = await productSchema.findById(req.body.id);
        let CheckCart = await addToCartSchema.findOne({productId : req.body.id})
        if(CheckCart){
            return res.json({message : 'product is Already Exists' , status : 0});
        }
        else{
            if(productRecord){ 
                let AddToCart = await addToCartSchema.create({
                    productId : req.body.id,
                    product_Name : productRecord.product_Name,
                    product_Price : productRecord.product_Price,
                    product_Description : productRecord.product_Description,
                    product_Qty : productRecord.product_Qty,
                    product_image : productRecord.product_image,
                })
                    return res.json({message : 'product Added in Add To Cart' , status : 0});
            }
            else{
                return res.json({message : 'product not Added in Add To Cart' , status : 0});
            }
        }
    }   
    catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
    addToCartInsert
}