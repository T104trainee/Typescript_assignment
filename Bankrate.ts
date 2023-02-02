//Type of the profit that we have to choose
enum ProfitType {
  Monthly = 'Month',
  Quarterly = 'Quarter',
  SemiAnnually = 'Six months',
  Yearly = 'Annual',
}

//welcome part
console.log();
console.log(
  `------------------ Welocome To Bank Rate Calculator ---------------`
);
console.log();
console.log(`Press Ctrl+C to exit any time`);
console.log();

//declaring required variables
let accountHolderName: string; //Name of the account holder
let accountNumber: string; //Account number
let amountInAccount: number; //Amount in account
let profitRate: number = 0; //Single variable for Profit rate of all types
let amountOfProfit: number; //calculated profit
let totalAmountWithProfit: number; //calculated total amount in account with profit
let amountDetails: string;
let profitType: ProfitType;

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
switch (profitType as ProfitType) {
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
