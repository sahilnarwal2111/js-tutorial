let myDate = new Date()
// console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0 , 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0 , 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2023-01-14")
let myCreatedDate1 = new Date("01-14-2023")

//Months in JS starts from zero


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getUTCMonth() + 1);

newDate.toDateString('default', {
    weekday: "long"
})