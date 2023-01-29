const mongoose = require("mongoose");

// Connecting To MongoDB
mongoose.set("strictQuery", false);
const db = mongoose.connect("mongodb://localhost:27017/banking");

// Import Model From models Folder
const Customer = require("./models/customer");

// Create a New Account
const addCustomer = async (customer) => {
  var a = customer.ACC_NO
  const account = await Customer.findOne({$or: [{ACC_NO: a}]})
  if(account){
    console.log('❌ Account Number Allready Taken');
    process.exit(0);
  }
  else{
    Customer.create(customer).then(customer => {
      console.info('✅ Account Created With Zero Balance');
      process.exit(0);
    });
  }
};

// Amount Deposit
const depositAmount = async (ACC_NO, customer) => {
  const account = await Customer.findOne({$or: [{ACC_NO: ACC_NO}]})
  if(!account){
    console.log('❌ Account Does Not Exist');
    process.exit(0);
  } 
  else{
    const amount =  Number(account.ACC_Balance) + Number(customer.ACC_Balance)
    const b =  await Customer.findOne({$or: [{ACC_NO: ACC_NO}]}).updateOne({ACC_Balance: amount})
    .then(customer => {
      console.log("✅ Money Deposit")
      process.exit(0);
    })
  }
};

// Withdraw Money
const withdrawMoney = async (ACC_NO, customer) => {
  const account = await Customer.findOne({$or: [{ACC_NO: ACC_NO}]})
  if(!account){
    console.log('❌ Account Does Not Exist');
    process.exit(0);
  } else {
    if(account.ACC_Balance >= customer.ACC_Balance){
      const amount =  Number(account.ACC_Balance) - Number(customer.ACC_Balance)
      const b =  await Customer.findOne({$or: [{ACC_NO: ACC_NO}]}).updateOne({ACC_Balance: amount})
      .then(customer => {
        console.log(`✅ Money withdrawal`)
        process.exit(0);
      })
    }
    else{
      console.log("❌ You Do Not Have Sufficient Balance");
      process.exit(0);
    }
  }
};

// Show The Balance
const showBalance = async (ACC_NO) => {
  const account = await Customer.findOne({$or: [{ACC_NO: ACC_NO}]})
  if(!account){
    console.log('❌ Account Does Not Exist');
    process.exit(0);
  } else {
    Customer.findOne({$or: [{ACC_NO: ACC_NO}]})
    .then(customer => {
      console.log(`${customer.ACC_Name} ${customer.ACC_Balance}`);
      process.exit(0);
    })
  }
 
};

// Export All Methods
module.exports = {
    addCustomer,
    showBalance,
    depositAmount,
    withdrawMoney
}
