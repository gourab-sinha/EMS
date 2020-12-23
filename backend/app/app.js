// Required modules 
const express = require('express');
const app = express();
const path = require('path');
const routerEmployee = require('../routes/employee');
const mongoose = require('../db/connection');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Requests types and access control
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use("/api/employees", routerEmployee);

module.exports = app;