// Router
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// Model
const Employee = require('../models/employee');

// Post Request
router.post("", (req,res,next)=>{
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.email);
    console.log(req.body.role);
    const employee = new Employee({
        firstName: "Gourab",
        lastName: "Sinha",
        email: "g@g.com",
        role: "Software Develper"
    });
    // console.log(employee);
    // return res.status(200).json({
    //     message: "TEST"
    // });
    employee.save().then(createdEmployee =>{
        console.log(createdEmployee);
        res.status(200).json({
            message: "Successfully added",
            employee: {
                id: createdEmployee._id,
                firstName: createdEmployee.firstName,
                lastName: createdEmployee.lastName,
                email: createdEmployee.email,
                role: createdEmployee.role
            }
        });
    }).catch(err=>{
        console.log(err);
        res.status(401).json({
            message: "Not authorized"
        });
    });
});

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
        });
    }).catch(err=>{
        console.error(err);
        res.status(500).json({
            message: "Internal Error"
        });
    });
});



module.exports = router;