const category = require('../models/categorySchema');
const subcategorySchema = require('../models/subCategorySchema');
const subCategoryInsertApi = async (req,res) => {
    try{
        const{subcategory,categoryId} = req.body;
        let subcategoryInsert = await subcategorySchema.create({
            categoryId : categoryId,
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

const subCategoryViewApi = async (req,res) => {
    try{
        let viewSubcategory = await subcategorySchema.find({}).populate('categoryId'); //categoryId = schema
        if(viewSubcategory){
            return res.json({message : viewSubcategory , status : 1});
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

const subCategoryDeleteApi = async (req,res) => {
    try{
        let id = req.body.id;
        let DeleteSubcategory = await subcategorySchema.findByIdAndDelete(id);
        if(DeleteSubcategory){
            return res.json({message : 'Subcategory Delete' , status : 1});
        }
        else{
            return res.json({message : 'Subcategory not Delete' , status : 0});
        }
    }
    catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
    subCategoryInsertApi,
    subCategoryViewApi,
    subCategoryDeleteApi
}