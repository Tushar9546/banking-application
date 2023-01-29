# Banking Application
This is a Banking CLI application where user can create account with zero balance, deposit, withdraw and check balacnce.

#Create Command :- 
node commands.js CREATE 
or 
node Commands.js C

After pressing enter it will ask the account no. and name if account number is already exist in data base then it will show an error in console and it 
will also check for account no length, the length must be greater then 5 or less then 9.

Deposit Command :- 
node commands.js DEPOSIT <acc_no> 
or 
node commands.js D <acc_no>

After pressing enter it will check is account avilable or not if it is avilable then deposite amount to existing balance else show an error message in console.

Withdraw Command :- 
node commands.js WITHDRAW <acc_no> 
or 
node commands.js W <acc_no>

After pressing enter it will check is account avilable or not if it is avilable then it will check is balance is greater then the withdraw amount or not if 
balance is avilable then withdraw the amount else show an error message in console.

BALANCE Command :- 
node commands.js BALANCE <acc_no> 
or 
node commands.js B <acc_no>

After pressing enter it will check is account avilable or not if it is avilable then it will show account holder name and balance else show an error message 
in console.

Output :-
Kelp 300 
Tushar 100
