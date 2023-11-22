const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //array into array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//concats return array //older method , can only concat 2 things
// const allHeros =  marvel_heros.concat(dc_heros)
// console.log(allHeros);

//spread operator more prefered over concat
// const all_new_heros = [...dc_heros, ...marvel_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("sahil")) // false
console.log(Array.from("sahil")) // [ 's', 'a', 'h', 'i', 'l' ]
console.log(Array.from({name:"sahil"})) // interesting - []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3));