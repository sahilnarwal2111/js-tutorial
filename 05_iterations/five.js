const coding = ["js", "ruby", "python", "java", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )
// forEach takes a call back function , and call back function doesn't have name
// also it has void return type - I'm just assuming

// coding.forEach( (item)=>{
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) // just give reference of function, don't execute it
// i.e. forEach can accept either a call back funciton or a function's reference

coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr);
})
/* result:
js 0 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
python 2 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
java 3 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
 */

const myCoding = [
    {
        languageName: "javascript",
        langaugeFileName: "js"
    },
    {
        languageName: "python",
        langaugeFileName: "py"
    },
    {
        languageName: "java",
        langaugeFileName: "java"
    }
]

// myCoding.forEach( (item)=>{
//     console.log(item.languageName);
// })
/*
javascript
python
java */