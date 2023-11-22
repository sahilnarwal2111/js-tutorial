// const instaUser1 = new Object()
// const instaUser2 = {}
// console.log(instaUser1); // {}
// console.log(instaUser2); //{}
//Difference is that first one is singleton object and second one is non-singleton

// const metaUser ={}
// metaUser.name = "Sam"
// metaUser.isLoggedIn = false
// console.log(metaUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        firstname: "sahil",
        lastname: "narwal"
    }
}
// console.log(regularUser.fullname.userfullname);
//Optional Chaining 4:09 hrs

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 } // It put two objects in obj3 

// console.log(obj3); 

// const obj3 = Object.assign({},obj1, obj2) //Prefered '4': 'b' }
// {} act as target and obj1 and obj2 are source 
// Not compulsory to use

//But when spread operator comes everything goes
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// console.log(Object.keys(obj1)); //very useful [ '1', '2' ]
// console.log(Object.values(obj1)); // [ 'a', 'b' ]
// console.log(Object.entries(obj1)); // [ [ '1', 'a' ], [ '2', 'b' ] ]

// console.log(obj1.hasOwnProperty('1')); //true
// console.log(obj1.hasOwnProperty('name'));  //false


//+++++++++++++++++Destructing of Objects and Arrays +++++++++++++
// Destructuring of Objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sahil"
}

// course.courseInstructor
// const {courseInstructor} = course
// console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);



const navbar = () => {

}

navbar(company = "sahil")



// API - apna kaam kisi ke sir ke upar daal dena
// In earlier times values from backend used to come in xml format but now a days it is coming in json format!
// json is just object without name
//e.g.
// {
//     "name": "sahil",
//     "courseName": "js in hindi",
//     "price": "free"
// }