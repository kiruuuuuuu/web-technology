document.writeln('datatypes in java script')

//                                       types of datatypes 1.primitive , 2. nonprimitive

//                                                   primitive datatypes

// 1.number

console.warn('number datatypes')
let a = 10;
console.log(a);
console.log(typeof a);

let b=10.23;
console.log(b);
console.log(typeof b);

let n1=Number(100)
console.log(n1);
console.log(typeof n1);


let n2=Number('dinga')
console.log(n2);
console.log(typeof n2);

let n3=Number(true)
console.log(n3);
console.log(typeof n3);

// 2.string

console.warn('string datatypes examples')

let s="hi"
console.log(s);
console.log(typeof s);

let s1=String('hello')
console.log(s1);
console.log(typeof s1);

let s2=String(100)
console.log(s2);
console.log(typeof s2);

let s3=String(true)
console.log(s3);
console.log(typeof s3);

// 3.boolean

console.warn('boolean datatypes examples')
let c=true;
console.log(b);
console.log(typeof b);

let b1=Boolean(0)
console.log(b1);
console.log(typeof b1);

let b2=Boolean('dingi')
console.log(b2);
console.log(typeof b2);

// 4.BigInt

console.warn('bigint example')

let num=10n;
console.log(num);
console.log(typeof num);


// 5.undefined

console.warn('examples of undefined')

let d;
console.log(d);
console.log(typeof d);

let e=undefined;
console.log(e);
console.log(typeof e);

// 6.null

console.warn('examples of null')
let x=null;
console.log(x);
console.log(typeof x);

//                                             non primitive datatypes

// 1.function

console.warn('examples for function')
function fun(){
    let a=10
}
console.log(typeof fun);

// 2.object

console.warn('example for object')
let obj={
    name : 'dinga' ,
    age : 10
}
console.log(typeof obj);

// 3.array

console.warn('example for array')
let arr=[10,'dinga']
console.log(typeof arr);