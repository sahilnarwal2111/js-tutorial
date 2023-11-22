// 1st most important topic to master JS - Object
// 2nd most important topic to master JS - Web Browser Events

//Objects
// There are two ways to declare objects in JS
// 1. As a literal
// 2. As Constructor

//Concept of singleton - when we make object through constructor
// Object.create

//Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sahil",
    "full name" : "Sahil Narwal",
    // mySym : "myKey1", // still it is string
    [mySym]: "myKey1", // now it is symbol
    age: 18,
    location: "Jind",
    email: "sahil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Moday", "Saturday"] 
}

//accessing object data
// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);
//can'nt be accessed through dot

//Interview Question 
// Declare a symbol and use it as a key and print it

// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym); // gives string

// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]); // Question? Still give me string !!


JsUser.email = "sahil@chatgpt.com"
// Object.freeze(JsUser) // used to lock to prevent new changes

// console.log(JsUser);

// In JS Functions are treated like Type - 1 citizens :)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(" JS userHEllo");
}

// console.log(JsUser.greeting);  // [Function (anonymous)]
console.log(JsUser.greeting()); // undefined