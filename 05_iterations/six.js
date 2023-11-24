const coding = ["js", "ruby", "python", "java", "cpp"]

// const values = coding.forEach( (item)=>{
//     console.log(item);
// })

// console.log(values); //-> undefined
// why undefined? -> forEach return void (I think so, may be I thinking wrong!)

const myNums = [1,2,3,4,5,6,7,8,9,10]
//filter also takes a call back function inside it
// myNums.filter( (nums) => num > 5) // it outputs nothing

// const newNums = myNums.filter( (nums) => nums > 5) // it outputs nothing
// console.log(newNums); // [ 6, 7, 8, 9, 10 ]

// call back function which will be passed to filter has a condition!

// const newNums = myNums.filter( (nums) => {
//     nums > 4
// })
// console.log(newNums); // -> []

// const newNums = myNums.filter( (nums) => {
//     return nums > 4
// })
// console.log(newNums); // -> [ 5, 6, 7, 8, 9, 10 ]

// with foreach
const newNums = []
myNums.forEach((num)=>{
    if(num> 4){
        newNums.push(num)
    }
})

console.log(newNums);


