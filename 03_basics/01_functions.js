function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("h");
    console.log("i");
    console.log("l");
}

// sayMyName = reference of function
// sayMyName() = execution of function
// sayMyName
// sayMyName()

// function addTwoNumbers(number1, number2){ // number1, number2 -> Parameters
//     console.log(number1 + number2)
// }
// function addTwoNumbers(number1, number2){ // number1, number2 -> Parameters
//     // let result = number1 + number2
//     // return result
//     // console.log("sahil"); //never get executed
//     return number1+number2
// }

// addTwoNumbers() // -> NaN
// addTwoNumbers(3,4) //-> 7 // 3,4 -> Arguments
// addTwoNumbers(3, "4") // -> 34
// addTwoNumbers(3, "a") // -> 3a
// addTwoNumbers(3, null) // -> 3

// const result = addTwoNumbers(3,5)
// console.log(result); //undefined

/*********************
 * In JS undefined and "" are considered as false values
 */
function loginUserMessage(username = "sam"){  //is function is called without any argument then function taked "sam" as default value
    // if(username === undefined) {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage("sahil"));
// console.log(loginUserMessage()); //undefined just logged in


// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200, 400, 500)); //-> 200 only

// ... rest operator and spread operator

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000)); //-> [ 200, 400, 500, 2000 ]

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000)); //-> [ 500, 2000 ]

const user = {
    username: "hitesh",
    prices : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam", price: 399
})

const myNewArray = [200,400,600]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2,3,4,5]));