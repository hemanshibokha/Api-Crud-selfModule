const mongoose = require('mongoose');
const TableSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    }
})

const Record = mongoose.model('User',TableSchema);
module.exports = Record;