// // WAP to print only even numbers from array using for loop and reult store it in array(Note:without using inbilt function)
let arrr=[10,15,20,25,30,35]
console.log(arrr);  // [10, 15, 20, 25, 30, 35]
let result=[]
for(let i=0; i<arrr.length; i++ ){
    if(arrr[i]%2==0)
        result[result.length]=arrr[i]
}  
console.log(result);  // [10, 20, 30]

//-----------------------------------------------------------------------------------------------------------------//

// for odd numbers
let a=[10,15,20,25,30,35]
console.log(a);  // [10, 15, 20, 25, 30, 35]
let res=[]
for(let i=0; i<a.length; i++){
    if(a[i]%2==1)
         res[res.length]=a[i]
 }
console.log(res)  // [15, 25, 35]

//-----------------------------------------------------------------------------------------------------------------//

// for in & for off
let arr1=[10,15,20]
console.log(arr1);  // [10, 15, 20]
console.warn("using for in loop")  // using for in loop
for (let key in arr1)
    console.log(key)  // 0, 1, 2

//-----------------------------------------------------------------------------------------------------------------//

console.warn('Using for of loop')  // Using for of loop
for (let key of arr1){
   console.log(key)  // 10, 15, 20
 }

 //-----------------------------------------------------------------------------------------------------------------//

console.warn('Using for each method')  // Using for each method
arr1.forEach((Elem,index)=>{
console.log(index);  // 0, 1, 2
})

//-----------------------------------------------------------------------------------------------------------------//

// Print square numbers
let arr=[7,3,5,6,1,2,8,4,9]
console.log(arr);  // [7, 3, 5, 6, 1, 2, 8, 4, 9]
let res1=[];
console.warn('for loop')  // for loop
for (let i=0;i<arr.length;i++){
    let res=arr[i]*arr[i];
    res1[res1.length]=res
}
console.log(res1);  // [49, 9, 25, 36, 1, 4, 64, 16, 81]

//-----------------------------------------------------------------------------------------------------------------//

console.warn('for-of loop')  // for-of loop
let res2=[]
for(let key of arr){
    let res=key*key
    res2[res2.length]=res
}
console.log(res2)  // [49, 9, 25, 36, 1, 4, 64, 16, 81]

//-----------------------------------------------------------------------------------------------------------------//

console.warn('forEach loop')  // forEach loop
let res3=[]
arr.forEach((ele)=>{
    res3[res3.length]=ele*ele
})
console.log(res3)  // [49, 9, 25, 36, 1, 4, 64, 16, 81]

//-----------------------------------------------------------------------------------------------------------------//

console.warn('map method')  // map method
let res4=arr.map((ele)=>{
    return(ele*ele)
})
console.log(res4)  // [49, 9, 25, 36, 1, 4, 64, 16, 81]

//-----------------------------------------------------------------------------------------------------------------//

//Print 1 t0 10 and store it in array
console.warn('')  // (blank)
let res5=[]
for(let a=0;a<=10;a++){
    res5[res5.length]=a
}
console.log(res5)  // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//-----------------------------------------------------------------------------------------------------------------//

console.warn('for loop')  // for loop
let num=9
for(let i=1;i<=10;i++){
    console.log(`${num} * ${i} = ${num*i}`)  // 9 * 1 = 9, 9 * 2 = 18, ... 9 * 10 = 90
}

//-----------------------------------------------------------------------------------------------------------------//

console.warn('for-of loop')  // for-of loop
for(let key of res5){
    console.log(`${num} * ${key} =${num*key}`)  // 9 * 0 = 0, 9 * 1 = 9, ... 9 * 10 = 90
}

//-----------------------------------------------------------------------------------------------------------------//

console.warn('forEach loop')  // forEach loop
res5.forEach((elem)=>{
    console.log(`${num} * ${elem} = ${num*elem}`)  // 9 * 0 = 0, 9 * 1 = 9, ... 9 * 10 = 90
})

//-----------------------------------------------------------------------------------------------------------------//

console.warn('map method')  // map method
let num1=5;
res5.map((elem)=>{
    console.log(`${num1} * ${elem} = ${num1*elem}`)  // 5 * 0 = 0, 5 * 1 = 5, ... 5 * 10 = 50
})

//-----------------------------------------------------------------------------------------------------------------//


console.warn('')  // (blank)
let array=[4,7,6,2,5,1,9,8,3]
console.log(array)  // [4, 7, 6, 2, 5, 1, 9, 8, 3]

//-----------------------------------------------------------------------------------------------------------------//

// Print only even numbers from array and store it in array
console.warn('for loop')  // for loop
let r1=[]
for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
        r1[r1.length]=array[i]
    }
}
console.log(r1)  // [4, 6, 2, 8]

//-----------------------------------------------------------------------------------------------------------------//

console.warn('for-of loop')  // for-of loop
let r3=[]
for(let key of array){
    if(key%2==0){
        r3[r3.length]=key
    }
}
console.log(r3)  // [4, 6, 2, 8]   

//-----------------------------------------------------------------------------------------------------------------//

console.warn('forEach loop')  // forEach loop
let r5=[]
array.forEach((elem)=>{
    if(elem%2==0){
        r5[r5.length]=elem
    }
})
console.log(r5)  // [4, 6, 2, 8]   

//-----------------------------------------------------------------------------------------------------------------//

console.warn('map method')  // map method
let even=array.map((elem)=>{
   return( elem%2==0);
})
console.log(even)  // [true, false, true, true, false, false, false, true, false]

//-----------------------------------------------------------------------------------------------------------------//


console.warn('filter method')  // filter method
let even1=array.filter((elem)=>{
   return( elem%2==0);
})
console.log(even1)  // [4, 6, 2, 8]

//-----------------------------------------------------------------------------------------------------------------//

// Special behavior of arrow key

let arrow1=()=> console.log("Hello")
arrow1()  // Hello

//-----------------------------------------------------------------------------------------------------------------//

let arrow2 = fname=>{
    console.log(`Hello ${fname}`)  // Hello Dinga
}
arrow2("Dinga")

//-----------------------------------------------------------------------------------------------------------------//

let arrow3=_=>{
    console.log("Hello")  // Hello
}
arrow3()

//-----------------------------------------------------------------------------------------------------------------//

let arrow4=()=>'Hello'
console.log(arrow4())  // Hello

//-----------------------------------------------------------------------------------------------------------------//

//WAP to check even / odd number using arrow function with parameter and return type
let evenOdd=(num)=>num%2==0?"Even":"Odd"
console.log(evenOdd(20))  // Even

//-----------------------------------------------------------------------------------------------------------------//

// Reduce method
// WAP to print large using reduce method
let ar=[2,4,3,7,5]
console.log(ar)  // [2, 4, 3, 7, 5]
let r=ar.reduce((preval,curval)=>{
    let sum=preval+curval
    return sum
})
console.log(r)  // 21

//-----------------------------------------------------------------------------------------------------------------//

// WAP to print large number using reduce method
let array1=[2,4,3,7,5]
console.log(array1)  // [2, 4, 3, 7, 5]
let large=array1.reduce((preval,curval)=>{
    return preval>curval?preval:curval
})
console.log(large)  // 7

//-----------------------------------------------------------------------------------------------------------------//












