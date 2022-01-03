//code chef - ATM
//problem code: HS08TEST
/*
Pooja wants to withdraw X $US from an ATM. The cash machine will only accept the transaction if X is a multiple of 5, AND Pooja's account balance has enough cash to perform the withdrawal transaction (including bank charges). For each successful withdrawal the bank charges 0.50 $US. Calculate Pooja's account balance after an attempted transaction.
*/
//what we need to do
// inputs: 
// 1. positive int - amount of $ pooja wants to withdraw (multiples of 5)
// 2. postiive int w/ 2 digits precicion - poojas initial bank balance
// outputs: 
// 1. account balance after attempted transaction given as a number with 2 digits precision. if there isnt enought money to complete the transaction, out put current bank balance

const atm = (amountToWithdraw, originalBalance) => {
  if (amountToWithdraw < originalBalance) {
    if(amountToWithdraw%5 === 0) {
      amountToWithdraw -= 0.5;
      return `Successful Transaction: ${amountToWithdraw}`
    } else {
      return 'Incorrect Withdrawal Amount (not multiple of 5)'
    }
  } else {
    return `Insufficient Funds: ${originalBalance}`
  }
}

console.log(atm(80, 120.00));