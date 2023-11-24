const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
// for in loop for objects
for (const key in myObject) {
    // console.log(key); // it will print key
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// does for-in works on arrays?
const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(key);
// }
//result
// 0
// 1
// 2
// 3
// 4

//conclusion : for-in loop for objects and for of loop for arrays