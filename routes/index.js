const express = require('express');
const Routes = express.Router();
console.log("Routes Connected");

const {verifyToken} = require('../config/passportStrargy');
const {checkRole} = require('../config/passportStrargy');

const adminController = require('../controller/adminController');
const categoryController = require('../controller/categoryController');
const subCategoryController = require('../controller/subcategoryController');

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

module.exports = Routes;