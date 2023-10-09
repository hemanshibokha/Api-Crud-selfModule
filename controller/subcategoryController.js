const category = require('../models/categorySchema');
const subcategorySchema = require('../models/subCategorySchema');
const subCategoryInsertApi = async (req,res) => {
    try{
        const{subcategory} = req.body;
        let subcategoryInsert = await subcategorySchema.create({
            categoryId : category,
            subcategory : subcategory
        })
        if(subcategoryInsert){
            return res.json({message : 'SubCategory Insert' , status : 1});
        }
        else{
            return res.json({message : 'Category Not Inserted' , status : 0});
        }
    }
    catch(error){
        console.log(error);
        return false; 
    }
}

module.exports = {
    subCategoryInsertApi
}