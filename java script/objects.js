document.write("objects")
// 3 ways to create an object in JavaScript:

// 1.Direct Literal   2.using new keyword  3.constructor function

// 1.Direct Literal
let car={
    carname:'BMW',
    carcolour:'black'
}
console.log(car)
console.log(typeof car)
// accessing properties of object
// 1. using dot operator(car.carname) 2. subscript  operator(car['carname'])

// using dot operator
console.log(car.carname)
// using subscript operator
console.log(car['carcolour'])

// destructing of object
let person={
    fname:'kiran',
    lname:'j',
    age:25
}
console.log(person)
//  without destructing
console.log(` ${person.fname} ${person.lname} age is ${person.age}`)
// with destructing
let {fname,lname,age}=person
console.log(` ${fname} ${lname} age is ${age}`)


// CRUD operations
// CREATE
let person1={
    fname1:'vidya',
    lname1:'shree',
    age1:25
}
console.log(person1)

// READ 
// using dot operator
console.log(`${person1.fname1} age is ${person1.age1}`)

// using destrcuting
let {fname1,lname1,age1}=person1
console.log(`${fname1} ${lname1} age is ${age1}`)

// add property to the object
person1.place='bangalore'
console.log(person1)
// update the property of object
person1.age1=26
console.log(person1)
// delete the property of object
delete person1.lname1
console.log(person1)


//                         nested if example
let person2={
    fnam:'kiran',
    lnam:'j',
    adress:{
        city:'bangalore',
        state:'karnataka'
    }
}
console.log(person2)

// using dot operator
console.log(`${person2.fnam} ${person2.lnam} lives in ${person2.adress.city}`)

// using destructing
let {fnam,lnam,adress:{city}}=person2
console.log(`${fnam} ${lnam} lives in ${city}`)

let person3={
    fnam:'vidya',
    lnam:'shree',
    dob:'2002',
    fullname:function(){
        console.log(`my name is ${this.fnam} ${this.lnam}`)
    },
    age:function(){
        let age = 2026-this.dob
        console.log(`my age is ${age}`)
    }
}
console.log(person3)
person3.fullname()
person3.age()



// create object sing new keyword
console.warn('create object using new keyword')


let d = new Date()
console.log(d)
console.log(typeof d)

console.log(d.getDate(),d.getMonth()+1,d.getFullYear())

console.log(d.getHours(),d.getMinutes(),d.getSeconds())
console.log(d.getDay()+1)

// create object using constructor function
    
function Car(name='',color=''){
    this.carname = name
    this.color = color
}
let c1 = new Car('kia')
console.log(c1)

let c2 = new Car('bmw','blue')
console.log(c2)


function Person(fnm,lnm,yyyy){
    this.fname=fnm
    this.lname=lnm
    this.year=yyyy
    this.fullname1=function(){
        return`my name is ${this.fname} ${this.lname}`
    }
    this.calculateage=function(){
        let dateobj=new Date()
        let age3 = dateobj.getFullYear() -  this.year
        return`${this.fname} age is ${age3}`
    }
}

let p1=new Person('dinga','raja', 2002)
console.log(p1)
console.log(p1.fullname1())
console.log(p1.calculateage())