// Required modules 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const routerEmployee = require('../routes/employee');
const mongoose = require('../db/connection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Requests types and access control
app.use((req,res,next)=>{
    res.setHeader(
        "Access-Control-Allow-Origin", "*"
    );
    res.setHeader(
        "Access-Control-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use("/api/employees", routerEmployee);

module.exports = app;