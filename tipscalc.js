total_amount = bill = 1000;

const tips = bill  < 50 || bill > 300 ? bill * 0.20 :
bill * 0.15 ;

console.log(`The bill was ${bill}, the tip was ${tips}, and the total value ${bill + tips}.`)

// this does not function propaerly
total_amount <= 300 && total_amount >= 50 ? console.log(`total = ${total_amount + (total_amount * .15)}. and tips = ${total_amount * .15}`) :
 `total = ${total_amount + (total_amount * .20)} and tips = ${total_amount * .20}`;




