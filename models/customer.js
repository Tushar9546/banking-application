const mongoose = require('mongoose');

// Customer Schema
const customerSchema = mongoose.Schema({
  ACC_NO: {
    type: String, 
    minlength: [6, "Account NO. length should be greate then 5 or less then 9"], 
    maxlength: [9, "Account NO. length should be greate then 5 or less then 9"],
    required: true
  },
  ACC_Name: {
    type: String, 
    required: [true, "Please enter a valid Name"]
  },
  ACC_Balance: {
    type: Number, 
    default: 0
  }
});

// Define and export
module.exports = mongoose.model('Customer', customerSchema);