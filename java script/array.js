// // wap to print only even numbers from array using for loop & result store it in result array
// // (note:without using any inbuilt method)

// let arr=[10,15,20,25,30,35]
// console.log(arr)

// let resarr=[]
// for(let i=0; i<arr.length;i++){
//     if(arr[i]%2==0)
//         resarr[resarr.lenght]=arr[i]
// } 
// console.log(resarr);

// let arr1=[10,15,20,25,30,35]
// console.log(arr1)

// let res1arr=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==1)
//         res1arr[res1arr.length]=arr[i]
// }
// console.log(res1arr)

// // for in and for off loop
// let arr2=[10,15,20,25,30,35]
// console.log(arr2)

// console.warn('for-in loop')
// for(let key in arr2){
//     console.log(key)
// }

// console.warn('for-of loop')
// for(let key of arr2){
//     console.log(key)
// }
//  console.warn('using foreach method')
//  arr.forEach((elem,index)=>{
//     console.log(elem)
//     console.log(index)
//  })

let arr4 = [7, 3, 5, 6, 1, 2, 8, 4, 9]
console.log(arr4)

let res1 = []
console.warn('for loop')
for (let i = 0; i < arr4.length; i++) {
    let res = arr4[i] * arr4[i]
    res1[res1.length] = res
}
console.log(res1)

console.warn('for-of loop')
let res2 = [];
for (let key of arr4) {
    let res = key * key
    res2[res2.length] = res
}
console.log(res2)


console.warn('for each method')
let res3 = [];
arr4.forEach((elem) => {
    res3[res3.length] = elem * elem
})
console.log(res3)

console.warn('map method')
let res4 = arr4.map((elem) => {
    return elem * elem
})
console.log(res4)

let no = []
for (let i = 1; i <= 10; i++) {
    no[no.length] = i
}
console.log(no)


// mul table
let mul = 2
for (let i = 1; i <= 10; i++) {
    console.log(`${mul}*${i}=${mul * i}`)
}

console.warn('using for of')
let mul1 = 3;
for (let key of no) {
    console.log(`${mul1} * ${key} = ${mul1 * key}`)
}

console.log('for each')
let mul2 = 5;
no.forEach((elem) => {
    console.log(`${mul2} * ${elem} = ${mul2 * elem}`)
})


console.warn('map method')
let mul3 = 8;
no.map((elem) => {
    console.log(`${mul3} * ${elem} = ${mul3 * elem}`)
})


// print even no present in array

console.warn('print even no in array using for loop')
let arr5 = [7, 3, 5, 6, 1, 2, 8, 4, 9]
let res6 = [];
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 2 == 0) {
        let res = arr5[i];
        res6[res6.length] = res
    }
}
console.log(res6)

console.warn('print even no in array using for for in method')
let res7 = []
for (let key of arr5) {
    if (key % 2 == 0)
        res7[res7.length] = key
}
console.log(res7)

console.warn('print even no in array using for for-each method')

res8 = []
arr5.forEach((elem) => {
    if (elem % 2 == 0)
        res8[res8.length] = elem
})
console.log(res8)

console.warn('print even no in array using for map method')
let even = arr5.map((elem) => {
    return (elem % 2 == 0)
})
console.log(even)

console.warn('filter method')
let even1 = arr5.filter((elem) => {
    return (elem % 2 == 0)
})
console.log(even1)


// special behaviour of arrow function
let arrow1 = () => console.log('hello') // if we have only one statement in function body we can avoid using flower brackets.
arrow1()

let arrow2 = () => fname => {
    console.log(fname) // if we have only one parameter in function we can avoid using paranthesis
}
arrow2('Alice')

let arrow3 = _ => {
    console.log('hello') // if we have no parameter in function we can use underscore as parameter
}
arrow3()

let arrow4 = () => 'hello' // if we have only return statement in function body we can avoid using flower brackets and return keyword these 2 are optional
arrow4()

// example program for special behaviour of arrow function
// wap to check even or odd number using arrow function with parameter and return statement
let evenodd = num => num % 2 == 0 ? 'even' : 'odd'
console.log(evenodd(10))
console.log(evenodd(15))

