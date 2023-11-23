//way to execute multiple lines in if without {}
if("0") console.log("statement 1"), console.log("statement 2");

const userEmail = []

if(userEmail){ // string if have value then true
    console.log("Got user email")
} else { // when ""
    console.log("Don't habe user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){} 

//way to check empty array
if(userEmail.length === 0) {
    console.log("array is empty");
}
//way to check empty object
const emptyObj = {}
// Object.keys(emptyObj) -> returns an array
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}


console.log(false == 0);
console.log(false == '');
console.log(0 == '');


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// console.log(val1);
//sometimes when use database, appwrite, backend, firebase we don't get direct response, instead we get two values,also chances be that we recieve null value or udefined and it can affect our whole code base

// val1 = null ?? 10
// val1 = undefined ?? 10
// console.log(val1); // it give 10
// for sake of understanding we have put 10 but here it would be having a complex function calling database etc

val1 = null ?? 10 ?? 20
console.log(val1); // first value 10

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less thab 80") : console.log("more than 8");
