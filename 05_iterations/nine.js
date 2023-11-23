//reduce - method

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and curVal: ${currVal}`);
//     return acc + currVal
// }, 3) // begining value of acc

// const myTotal = myNums.reduce((acc, currval) => {
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, currval) =>  acc + currval, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price ,0)
console.log(priceToPay);