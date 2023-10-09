const express = require('express');
let port = 8080;
const app = express();
const Database = require('./config/mongoose');
app.use(express.urlencoded());
app.use('/',require('./routes/index'));
app.listen(port,(error)=>{
    if(error){
        console.log(error);
        return false;   
    }
    else{
        console.log("Server Connected " + port);
    }
})