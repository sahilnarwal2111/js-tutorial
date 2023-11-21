//primitive and non primitive(reference types)

//# primitive - call by value
// 7 p datatypes : String, Number, Boolean, null, undefined, Symbol, BigInt
//Symbol - It is used to make something unique e.g. when one component is used many times in frontend we wrap it in symbol to make it unique

// const score = 100
// const score = false
// Numbers can be without decimal or with it
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId);
//BigInt
const bigNumber = 2342489797979n
//JS dynamically typed lang
//TS is statistically typed lang


//Reference Type - Non Primitive
// DataType: Array, Object, Functions

//Two things to master JS: Objects and Browser WebEvents 

const heros = ["shakitman", "naagraj", "doga"]

let myObj = {
    name:"sahil",
    age : 20,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber);

// console.log(typeof myFunction);

// Note - data type of all non primitive is funtion expect typeof function gives 'function object'

//HW - Return type of all datatypes used in this video


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap (Non - Primitive)

let myYoutubename = "sahildotcom" // It will go in stack

let anothername = myYoutubename

anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    name:"sahil",
    upi:"abc@ybl"
}

let userTwo = userOne

userTwo.name = "narwal"

console.log(userOne.name);
console.log(userTwo.name);