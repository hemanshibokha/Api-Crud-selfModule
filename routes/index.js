const express = require('express');
const Routes = express.Router();
console.log("Routes Connected");

const multer = require('multer');

const FileUpload = multer.diskStorage({
    destination : (req,res,cb) => {
        cb(null,'./uploads');
    },
    filename : (req,file,cb) => {
        cb(null,Date.now()+file.originalname);
    }
})

const imageUpload = multer({storage : FileUpload}).single('product_image');

const {verifyToken} = require('../config/passportStrargy');
const {checkRole} = require('../config/passportStrargy');

const adminController = require('../controller/adminController');
const categoryController = require('../controller/categoryController');
const subCategoryController = require('../controller/subcategoryController');
const productController = require('../controller/productController');

Routes.post('/insetApi',adminController.insetApi);
Routes.get('/viewApi',verifyToken,checkRole('admin'),adminController.viewApi);
Routes.delete('/deleteApi',adminController.deleteApi);
Routes.put('/updateApi',adminController.updateApi);
Routes.post('/loginApi',adminController.loginApi);

Routes.post('/categoryInsertApi',categoryController.categoryInsertApi);
Routes.get('/categoryViewApi',categoryController.categoryViewApi);
Routes.delete('/categorydeleteApi',categoryController.categorydeleteApi);
Routes.put('/categoryUpdateApi',categoryController.categoryUpdateApi);

Routes.post('/subCategoryInsertApi',subCategoryController.subCategoryInsertApi);
Routes.get('/subCategoryViewApi',subCategoryController.subCategoryViewApi);
Routes.delete('/subCategoryDeleteApi',subCategoryController.subCategoryDeleteApi);
Routes.put('/subCategoryUpdateApi',subCategoryController.subCategoryUpdateApi);

Routes.post('/productInsertApi',imageUpload,productController.productInsertApi);
Routes.get('/productViewApi',productController.productViewApi);
Routes.delete('/productDeleteApi',productController.productDeleteApi);
Routes.put('/productupdateApi',productController.productupdateApi);

module.exports = Routes;