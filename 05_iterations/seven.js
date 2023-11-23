const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// map returns a value
// map is a better to use and it also takes call back and its good thing is that it returns value
// const newNums =  myNumbers.map( (num) => num + 10)
// console.log(newNums)

// forEach, filter(call back with conditionn and it return also that) and map(i think funtion which return something): all these takes call back function

//++++++++++ Chaining ++++++++++
const newNums = myNumbers
        .map((num)=> num * 10)
        .map((num)=> num + 1)
        .filter((num) => num >= 40)

console.log(newNums);