// // types of functions
// // general,anonymous,arrow,self invoking,callback,higher order
// console.warn('general fuctions')

// //                                      general functions
// // function without parameter & without return statements

// function fun() {
//     console.log("hello")
// }

// fun() //calling a function
// fun() // hello
// console.log(typeof fun);

// function add() {
// //     let a = 100
// //     let b = 200
// //     let sum = a + b
// //     console.log(sum);
// }
// add()  // 300
// add()  // 300

// // function with parameter & without return statements

// function printname(fname) {
//     console.log('hello ' + fname)
// }
// printname('kiran') //hello kiran
// printname('vidya') //hello vidya

// function printnames(fname, lname) {
//     console.log(`hello ${fname} ${lname}`) //interpolation $ and `
// }
// printnames('kiran', 'j')
// printnames('vidya', 'shree')


// // wap to add 2 numbers usig general function with parameters
// function add2num(num1, num2) {
//     res = num1 + num2
//     console.log(`${num1} + ${num2} = ${res}`)
// }
// add2num(100, 200)
// add2num(55, 45)

// // wap to print only even numbers from start to end using general fuctions with parameters

// function even(start, end) {
//     console.warn(`even numbers from ${start} to ${end}`)
//     if (typeof start === 'number' && typeof end === 'number') {
//         if (start < end)
//             for (let i = start; i <= end; i++) {
//                 if (i % 2 == 0)
//                     console.log(i)
//             }
//         else
//             console.error('start is greater than end ')

//     }
//     else
//         console.error('not a number')
// }
// // even(10,40)
// // even(35,45)
// // even(35,25) //  start is greater than end
// // even('a','b')  // not a number

// function odd(start, end) {
//     console.warn(`odd numbers from ${start} to ${end}`)
//     if (typeof start === 'number' && typeof end === 'number') {
//         if (start < end)
//             for (let i = start; i <= end; i++) {
//                 if (i % 2 == 1)
//                     console.log(i)
//             }
//         else
//             console.error('start is greater than end')
//     }
//     else
//         console.error('not a number')
// }
// odd(20, 30)
// odd('a', 'b')
// odd(30, 20)


// // // change the default value of parameter

// function demo(a = 0) {
//     console.log(a);
// }
// demo()
// demo(120)

// function sum(a = 0, b = 0) {
//     res = a + b
//     console.log(`${a} + ${b} = ${res}`)
// }
// sum()
// sum(20, 30)

// // function without parameter and with return statement

// function fun2(){
//     let a=200
//     let b=400
//     let sum1=a+b
//     console.log(sum1);

//     return `${a} + ${b} = ${sum1}`
// }
// let res = fun2()
// console.log(res)


// // function with parameter and with return statement
// function myname(fname='',lname=''){
//     return(`hello ${fname} ${lname}`);
// }
// let n1=myname('dinga','raja')
// console.log(n1) // hello dinga raja

// console.log(myname('dingi')); // hello dingi


// // wap to check  given no is even or odd using general function with parameter and return statement


// function evenodd(number=0){
//     // if (number%2==0)
//     //    {
//     //      return(`given number ${number} is even`)
//     //    }
//     // else 
//     // {
//     //     return(`given number ${number} is odd`)
//     // }

//     return (number%2==0) ? 'even' : 'odd'
// }
// let n3=evenodd(5)
// console.log(n3);

// console.log(evenodd(4));

// //                                      anonymous functions
// console.warn('anonymous functions')

// // function without name is called anonymous function

// // function without parameter and without return statement
// let fun3=function(){
//     console.log('hello')
// }
// fun3() // hello

// // function with parameter and without return statement
// let fun4=function(fname){
//     console.log('hello ' + fname)
// }
// fun4('kiran') // hello kiran 


// //function without parameter and with return statement
// let fun5=function(){
//     let a=100
//     let b=200
//     return a+b
// }
// let n4=fun5()
// console.log(n4) // 300
// console.log(fun5()) // 300


// // function with paramter and with return statement

// let fun1=function(fname){
//     return('hello ' + fname);
// }
// let n5=fun1('vidya')
// console.log(n5);
// console.log(fun1('kiran'));


// //                                  arrow functions

// console.warn('arrow functions')

// // function without parameter and without return statement
// let arrow1=()=>{
//     console.log('hello')
// }
// arrow1() // hello

// // function with parameter and without return statement
// let arrow2=(fname)=>{
//     console.log('hello ' + fname)
// }
// arrow2('kiran') // hello kiran

// // function without parameter and with return statement
// let arrow3=()=>{
//     let a=100
//     let b=200
//     return a+b
// }
// let n6=arrow3()
// console.log(n6) // 300
// console.log(arrow3()) // 300

// // function with parameter and with return statement
// let arrow=(a=0,b=0)=>{
//     let res=a+b
//     return(`${a} + ${b} = ${res}`)
// }
// let sum=arrow(100,200)
// console.log(sum); // 100 + 200 = 300
// console.log(arrow(55,45)); // 55 + 45 = 100 


//                                  self invoking function

// let x = (function (a, b) {
//     let sum5 = a + b
//     return `${a} + ${b} = ${sum5}`
// })(10, 20)
// console.log(x)


//                                    callback function
console.warn('call back function')
let num=()=>{
    return 300
}

let sum=(a,b)=>{
    res=a+b
    console.log(res)
}
sum(num(),200)


let num1=()=>{
    return 300
}
let sum1=(a,b)=>{
    res1=a()+b
    console.log(res1)
}
sum1(num,400)


//                            higher order function

console.warn('higher order function')
let sum2=(a,b)=>{
    res2=a()+b
    console.log(res2)
}
sum2(()=>{
    return 500
},600)


