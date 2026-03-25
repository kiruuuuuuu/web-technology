console.warn('example for var')
var a; // declaration
a=100; // initilization
console.log(a) //100

a=200; // re-initilization
console.log(a) // 200

var a; // re-declarartion
a='hi' // re-initilization
console.log(a) //hi

console.warn('example for let')
let b;  // declaration
b='hello' //initilization
console.log(b) // hello

b='bye' // re-initilization
console.log(b) //bye

// let b; // cant re-declare
b='welcome' // reinitilization
console.log(b) //welcome

console.warn('example for const')

const c='const' // must and should declare and initilize in the same line next line means error.
console.log(c)

// const c='error' cant re-declare and cant re-initilize.


