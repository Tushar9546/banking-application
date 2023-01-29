#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');

const {
    addCustomer,
    showBalance,
    depositAmount,
    withdrawMoney
} = require('./index');

// Account Querys
const accountQuerys = [
  {
    type: "input",
    name: "ACC_NO",
    message: "Please Create Account No. (eg: ACC001 ) : "
  },
  {
    type: "input",
    name: "ACC_Name",
    message: "Please Enter Account Holder Name : "
  },
];

// Money Querys
const moneyQuery = [
  {
    type: "input",
    name: "ACC_Balance",
    message: "Enter The Amount : "
  }
];

program 
  .version('1.0.0')
  .alias('v')
  .description('Banking CLI Application');

// Create Command
program
  .command('CREATE')
  .alias('C')
  .description('Create A New Account')
  .action(() => {
    prompt(accountQuerys).then(answers => addCustomer(answers));
});

// Deposite Command
program
  .command('DEPOSIT <ACC_NO>')
  .alias('D')
  .description('Deposite Money')
  .action((ACC_NO) => {
    prompt(moneyQuery).then(answers => depositAmount(ACC_NO, answers))
});

// Withdraw Money
program
  .command('WITHDRAW <ACC_NO>')
  .alias('W')
  .description('Withdraw Money')
  .action((ACC_NO) => {
    prompt(moneyQuery).then(answers => withdrawMoney(ACC_NO, answers))
});

// Show Balance Command
program
  .command('BALANCE <ACC_NO>')
  .alias('B')
  .description('Current Balance')
  .action(ACC_NO => showBalance(ACC_NO));

// To pass the Arguments
program.parse(process.argv);
