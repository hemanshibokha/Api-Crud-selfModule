const category = require('../models/categorySchema');
const categorySchema = require('../models/categorySchema');
const categoryInsertApi = async (req,res) => {
    try{
        const {category} = req.body;
        let Category = await categorySchema.create({
            category : category
        })
        if(Category){
            return res.json({message : 'category Inserted', status : 1 });
        }
        else{
            return res.json({message : 'category not Inserted', status : 0 });
        }
    }
    catch(error){ 
        console.log(error);
        return false;
    }
}

const categoryViewApi = async (req,res) => {
    try{
        let viewCategory = await categorySchema.find({});
        if(viewCategory){
            return res.json({message : viewCategory , status : 1 });
        }
        else{
            return res.json({message : 'category not Fetch', status : 0 });
        }
    }
    catch(error){
        console.log(error);
        return false;
    }
}

const categorydeleteApi = async (req,res) => {
    try{
        let deleteId = req.body.id;
        let DeleteRecord = await categorySchema.findByIdAndDelete(deleteId);
        if(DeleteRecord){
            return res.json({message : 'Category Delete' , status : 1});
        }
        else{
            return res.json({message : 'Category Not Delete' , status : 0});
        }
    }
    catch(error){
        console.log(error);
        return false;
    }
}

const categoryUpdateApi = async (req,res) => {
    try{
        let updateId = req.body.id;
        let UpdateRecord = await categorySchema.findByIdAndUpdate(updateId,{
            category : category
        });
        if(UpdateRecord){
            return res.json({message : 'Category Update' , status : 1});
        }
        else{
            return res.json({message : 'Category Not Update' , status : 0});
        }
    }
    catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
    categoryInsertApi,
    categoryViewApi,
    categorydeleteApi,
    categoryUpdateApi
}