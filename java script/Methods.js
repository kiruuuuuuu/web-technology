// Sort method
//1) Direct sort method
let arr = [5, 2, 9, 1, 5];
console.log(arr);  // [5, 2, 9, 1, 5]
let x=arr.sort();
console.log(x);  // [1, 2, 5, 5, 9]
console.log(x.reverse());  // [9, 5, 5, 2, 1]

//-----------------------------------------------------------------------------------------------------------------//

//2) Sort method 
let arr1 = [5, 2, 9, 1, 5];
console.log(arr1);  // [5, 2, 9, 1, 5]
let x1=arr1.sort((a,b)=>{
    return a-b
});
console.log(x1);  // [1, 2, 5, 5, 9]

//-----------------------------------------------------------------------------------------------------------------//

// push method()
let arr2=[10,20,30]
console.log(arr2);  // [10, 20, 30]
arr2.push('Hi',true)
console.log(arr2);  // [10, 20, 30, 'Hi', true]
console.log(arr2.length);  // 5

//-----------------------------------------------------------------------------------------------------------------//

// unshift method()
let arr3=[10,20,30]
console.log(arr3);  // [10, 20, 30]
arr3.unshift('Bye',false)
console.log(arr3);  // ['Bye', false, 10, 20, 30]
console.log(arr3.length);  // 5

//-----------------------------------------------------------------------------------------------------------------//

// pop method() and shift method()
let arr4=[10,'hi',true,false,200,'bye']
console.log(arr4);  // [10, 'hi', true, false, 200, 'bye']
let y=arr4.pop()
console.log(y);  // 'bye'
let z=arr4.shift()
console.log(arr4);  // ['hi', true, false, 200]
console.log(z);  // 10

//-----------------------------------------------------------------------------------------------------------------//

// Splice method()
let arr5=[10,20,30,40,50]
console.log(arr5);  // [10, 20, 30, 40, 50]
let x2=arr5.splice(1,2)
console.log(arr5);  // [10, 40, 50]
console.log(x2);  // [20, 30]

//-----------------------------------------------------------------------------------------------------------------//

let arr6=[10,20,30,40,50]
console.log(arr6);  // [10, 20, 30, 40, 50]
arr6.splice(3,0,'new1','new2')
console.log(arr6);  // [10, 20, 30, 'new1', 'new2', 40, 50]

//-----------------------------------------------------------------------------------------------------------------//

let arr7=[10,20,30,40,50]
console.log(arr7);  // [10, 20, 30, 40, 50]
arr7.splice(2,2,'hi')
console.log(arr7);  // [10, 20, 'hi', 50]

//-----------------------------------------------------------------------------------------------------------------//

// Slice method()
let arr8=[10,20,30,40,50]
console.log(arr8.slice(1,4));  // [20, 30, 40]
console.log(arr8);  // [10, 20, 30, 40, 50]

//-----------------------------------------------------------------------------------------------------------------//

//indexOf() and lastIndexOf()
let arr9=['yellow','red','blue','green','red']
console.log(arr9);  // ['yellow', 'red', 'blue', 'green', 'red']
console.log(arr9.indexOf('red'));  // 1
console.log(arr9.lastIndexOf('red'));  // 4
console.log(arr9.indexOf('gray'));  // -1

//-----------------------------------------------------------------------------------------------------------------//

//includes() method
let arr10=['yellow','red','blue','green','red']
console.log(arr10);  // ['yellow', 'red', 'blue', 'green', 'red']
console.log(arr10.includes('red'));  // true
console.log(arr10.includes('gray'));  // false

//-----------------------------------------------------------------------------------------------------------------//

//join() method
let arr11=['I','love','JavaScript']
console.log(arr11);  // ['I', 'love', 'JavaScript']
console.log(arr11.join());  // 'I,love,JavaScript'
console.log(arr11.join(' '));  // 'I love JavaScript'

//-----------------------------------------------------------------------------------------------------------------//

//split() method
let str='I love JavaScript'
console.log(str);  // 'I love JavaScript'
console.log(str.split());  // ['I love JavaScript']
console.log(str.split(' '));  // ['I', 'love', 'JavaScript']
console.log(str.split(''));  // ['I', ' ', 'l', 'o', 'v', 'e', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

//-----------------------------------------------------------------------------------------------------------------//

