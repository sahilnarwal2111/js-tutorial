const map = new Map()
// Map remembers the insertion order of keys and holds key value pair

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);
//result
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
} 
*/

//for of loop

// for (const key of map) {
//     console.log(key);
// }
//result: 
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }
//result:
/**
 IN :- India
USA :- United States of America
Fr :- France
 */

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const iterator of myObject) {
//     console.log(iterator); // TypeError: myObject is not iterable
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); // TypeError: myObject is not iterable
// }

// above problems can be solved by for-in map?
//  not really :)
for (const key in map) {
    console.log(key); //it will nothing in output
}

