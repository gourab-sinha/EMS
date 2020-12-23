// Employee model structure
const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    role: {type: String, required: true}
});

module.exports = mongoose.model("Employee", employeeSchema);