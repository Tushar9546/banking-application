# Banking Application
This is a Banking CLI application where user can create account with zero balance, deposit, withdraw and check balacnce.

<h3>Create Command :- </h3>
<p>node commands.js CREATE </p> 
<span> or </span> 
<p>node Commands.js C </p>
After pressing enter it will ask the account no. and name if account number is already exist in data base then it will show an error in console and it 
will also check for account no length, the length must be greater then 5 or less then 9.

<h3>Deposit Command :- </h3>
<p>node commands.js DEPOSIT <acc_no> 
<span> or </span> 
<p>node commands.js D <acc_no> </p>
After pressing enter it will check is account avilable or not if it is avilable then deposite amount to existing balance else show an error message in console.

<h3>Withdraw Command :- </h3>
<p> node commands.js WITHDRAW <acc_no> </p>
<span> or </span> 
<p> node commands.js W <acc_no> </p>
After pressing enter it will check is account avilable or not if it is avilable then it will check is balance is greater then the withdraw amount or not if 
balance is avilable then withdraw the amount else show an error message in console.

<h3>BALANCE Command :- </h3>
<p>node commands.js BALANCE <acc_no> </p>
<span> or </span> 
<p>node commands.js B <acc_no></p>
After pressing enter it will check is account avilable or not if it is avilable then it will show account holder name and balance else show an error message 
in console.

<h3>Output :- </h3>
<p>Kelp 300 </p>
<p>Tushar 100 </p>
