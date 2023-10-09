const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/Self-Module-Api');
const Database = mongoose.connection;
Database.on('connected',(error)=>{
    if(error){
        console.log(error);
        return false;
    }
    else{
        console.log("DataBase Connected");
    }
})
module.exports = Database;