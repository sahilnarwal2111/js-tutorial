const myArr = [0,1,2,3,4,5]
const myHeros =["shaktiman", "naagraj"]
//shallow copy and deep copy

// console.log(myArr[0]);

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //add at first position
// myArr.shift() //removes first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// console.log(myArr);


// //join
// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);
// // Join - It binds the array and convert it to string


//slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr)
console.log(myn2);

//very important to note the difference between slice and splice
// slice -> not inlcude last index and original array is not affected
// splice -> last indec is inlcuded and original is leftover of remaining element which are not in splice :) 