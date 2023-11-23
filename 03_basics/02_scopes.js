// function one(){
//     const username = "sahil"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website);

//     two()
//     // one() is called in outside two() is never executed bcoz of error in console.log(website) !

// }

// one()

// if two() is not called, and just declared and one() is called in outside , two() nerver get executed


// +++++++++++++++++++ interesting ++++++++++++++++++++++++++
// Hoisting in JS
addone(5) //gives no error
function addone(num){
    return num + 1
}


addTwo(5) // gives error
const addTwo = function(num){ //sometimes called as expression
    return num + 2
}
