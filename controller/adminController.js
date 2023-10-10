const registerSchema = require('../models/adminschema');
const jwt = require('jsonwebtoken');
const insetApi = async (req,res) => {
    try{
        const {name,email,password,city,role} = req.body;
        let User = await registerSchema.findOne({email : email});
        if(User){
            return res.json({message : "User Already Registered" , status : 0});   
        }
        else{
            let Insertdata = await registerSchema.create({
                name : name,
                email : email,
                password : password,
                city  : city,
                role : role
            })
            if(Insertdata){
                return res.json({message : "User Registered" , status : 1});
            }
            else{
                return res.json({message : "User Not Registered" , status : 0});
            }
        }
    }
    catch(error){
        console.log(error);
        return false;
    }
}       

const viewApi = async (req,res) => {
    try{
        let ViewData = await registerSchema.find({});
        if(ViewData){
            return res.json({message : ViewData , status : 1});
        }
        else{
            return res.json({message : "Data Not Fetch" , status : 0});
        }
    }
    catch(error){
        console.log(error);
        return false;
    }
}

const deleteApi = async (req,res) => {
    try{
        let id = req.query.id;
        let DeleteData = await registerSchema.findByIdAndDelete(id);
        if(DeleteData){
            return res.json({message : "Record Delete" , status : 1});
        }
        else{
            return res.json({message : "Record Not Delete" , status : 0});
        }
    }
    catch(error){
        console.log(error);
        return false;
    }
}


const updateApi = async (req,res) => {
    try{
        let id = req.body.id;
        console.log(id);
        let UpdateData = await registerSchema.findByIdAndUpdate(id,{
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            city : req.body.city
        })
        if(UpdateData){
            return res.json({message : "Record Updated" , status : 1});
        }
        else{
            return res.json({message : "Record Not Update" , status : 0});
        }
    }
    catch(error){
        console.log(error);
        return false;
    }
}

const loginApi = async (req,res) => {
    try{
        const{email,password} = req.body;
        let UserLogin = await registerSchema.findOne({email : email});
        if(!UserLogin || UserLogin.password != password){
            return res.json({message : "check Email and password" , status : 0 });
        }
        else{
            const Token = jwt.sign({payload : UserLogin}, 'Hemanshi', {expiresIn : '1hr'});
            return res.json({token : Token});
        }
    }
    catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
    insetApi,
    viewApi,
    deleteApi,
    updateApi,
    loginApi
} 