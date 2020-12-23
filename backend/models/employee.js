// Employee model structure
const mongoose = require('mongoose');
const uniqueValidator=  require('mongoose-unique-validator');
const employeeSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    role: {type: String, required: true},
    email: {type: String, required: true, unique: true},
});
employeeSchema.plugin(uniqueValidator);

employeeSchema.virtual("fullName", function(){
    return this.firstName + ' ' + this.lastName;
});


module.exports = mongoose.model("Employee", employeeSchema);