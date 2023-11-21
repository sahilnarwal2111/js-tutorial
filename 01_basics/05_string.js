const name = "sahil"
const repoCount = 50
console.log(name + repoCount + " Value"); // Not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Modern method sring interpolation

const gameName = new String('sahil-sn')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); //It is doesnot change original value bcoa stored in stack
console.log((gameName.charAt(4)));
console.log(gameName.indexOf('l'));

// const newString =  gameName.substring(0,4) //last index non inclusive
const newString =  gameName.substring(-9,4) //last index non inclusive but it will count from 0 only
console.log(newString);

const anotherString = gameName.slice(-8,4) //accept negative values
console.log(anotherString);

const newStringOne = "    sahil      \n   "
console.log(newStringOne);
console.log(newStringOne.trim());
//trim works on whitespace and newline characters

//Interesting thing****************************
// const url = "https://sahil.com/saihl narwal"
//By default URL Encoding will convert the white space in url to %20
// So url will become "https://sahil.com/sahil%20narwal"

const url = "https://sahil.com/sahil%20narwal"

console.log(url.replace('%20','-'));
console.log(url.includes('singh'));

console.log(gameName.split('-'));

//HW - Just go through all methods in console of inspect page