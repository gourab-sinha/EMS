// Router
const express = require('express');
const router = express.Router();

// Model
const Employee = require('../models/employee');

// Get Request
router.get("", (req,res,next)=>{
    console.log(req.query);
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const employeeQuery = Employee.find();

    let fetchedEmployees;
    if(pageSize && currentPage){
        employeeQuery.skip(pageSize * (currentPage -1)).limit(pageSize);
    }
    employeeQuery.then(documents => {
        fetchedEmployees = documents;
        // Total Employee Count
        return Employee.count(); 
    }).then(count => {
        res.status(200).json({
            message: "Employees fetched successfully",
            employees: fetchedEmployees,
            totalCount: count
        })
    }).catch(err=>{
        console.error(err);
        res.status(500).json({
            message: "Internal Error"
        });
    });
});

module.exports = router;