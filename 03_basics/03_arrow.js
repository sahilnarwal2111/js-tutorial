const user = {
    username: "sahil",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website!`);
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {} bcoz we are in node environment
// but in browser's console it give window (global object)


// function chai(){
//     console.log(this); //-> some values it will give
// }
// chai()

// function chai(){
//     let username = "sahil"
//     console.log(this.username); //-> it gives undefined 
//     // this context works in objects only
// }
// chai()



// const chai = function chai(){
//         let username = "sahil"
//         console.log(this.username); //-> it also gives undefined 
//     }
// chai()

// const chai = () => {
//     let username = "sahil"
//     console.log(this.username); // it also gives undefined
// }
// chai()

const chai = () => {
    let username = "sahil"
    console.log(this); // it gives {}
}
chai()

// **** Myth - You can't use this in arrow functions. ********

// +++ Arrow Function +++

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implicit return
// const addTwo = (num1, num2) => num1 + num2 //no need to write return 
// const addTwo = (num1, num2) => (num1 + num2) //no need to write return 
// If wrapped in curly braces then need to write return statement and if in () then no need

// console.log(addTwo(3,4));


// const addTwo = ( num1, num2 ) => {username: "hitesh"}
// console.log(addTwo(3,4)); // -> It gives undefined

const addTwo = ( num1, num2 ) => ({username: "hitesh"})
console.log(addTwo(3,4)); // -> It gives { username: 'hitesh' }
// note : to return an object u need to wrap it in ()





const myArray = [1,2,3,4,5]

myArray.forEach(() => {})