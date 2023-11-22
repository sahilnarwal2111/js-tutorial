// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //100.00

// const otherNumber = 23.8996
// const otherNumber = 123.8996
const otherNumber = 1123.8996
console.log(otherNumber.toPrecision(3)); 

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //1,000,000
// console.log(hundreds.toLocaleString('en-IN')); 10,00,000

//+++++++++++MATHS++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9))
// console.log(Math.min(1,2,4,3,-1))

//Math.random

// console.log(Math.random()); // 0 to 1 values
// console.log(Math.floor((Math.random()*10)) + 1)

const min = 10
const max = 20

console.log(Math.floor((Math.random()*(max - min + 1) + min)))