"use strict";
//Type of the profit that we have to choose
var ProfitType;
(function (ProfitType) {
    ProfitType["Monthly"] = "Month";
    ProfitType["Quarterly"] = "Quarter";
    ProfitType["SemiAnnually"] = "Six months";
    ProfitType["Yearly"] = "Annual";
})(ProfitType || (ProfitType = {}));
//welcome part
console.log();
console.log(`------------------ Welocome To Bank Rate Calculator ---------------`);
console.log();
console.log(`Press Ctrl+C to exit any time`);
console.log();
//declaring required variables
let accountHolderName; //Name of the account holder
let accountNumber; //Account number
let amountInAccount; //Amount in account
let profitRate = 0; //Single variable for Profit rate of all types
let amountOfProfit; //calculated profit
let totalAmountWithProfit; //calculated total amount in account with profit
let amountDetails;
let profitType;
//Setting account details
accountNumber = 'SB12345';
accountHolderName = 'John Smith';
amountInAccount = 4000000;
profitType = ProfitType.SemiAnnually; //chosen semi annually profit
//taking user input
console.log(`Please Specify your Account Number?...` + `${accountNumber}`);
console.log(`Name on your bank account?.....${accountHolderName}`);
console.log(`Current amount in the bank acoount:.....${amountInAccount}`);
console.log(`Please Select aProfit type for application >> ${profitType}`);
console.log();
// calculate profit
switch (profitType) {
    case ProfitType.Monthly:
        profitRate = 4;
        break;
    case ProfitType.Quarterly:
        profitRate = 6;
        break;
    case ProfitType.SemiAnnually:
        profitRate = 8;
        break;
    case ProfitType.Yearly:
        profitRate = 10;
        break;
    default:
        break;
}
//calclualte profit
amountOfProfit = (amountInAccount * profitRate) / 100;
totalAmountWithProfit = amountInAccount + amountOfProfit;
amountDetails = `${accountHolderName} gets ${amountOfProfit} with the  rate of  ${profitRate}% on First ${profitType} and total amount the bank becomes: ${totalAmountWithProfit}`;
console.log('RESULTS');
console.log('------');
console.log(amountDetails);
