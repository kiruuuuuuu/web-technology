document.writeln('control statements')

// 1.branching/conditional and 2.looping

// 1.branching

// if and if else condition example

console.warn('if and if else condition')
let rcb = "won"
if(rcb=="loss"){
    console.log('esala cup namde')
 }
else{
    console.log('next sala cup namde')
}

 let num1=15;
 if(num1 %2  ==0){
     console.log(num1+' is even')
 }
 else{
     console.log(num1+ " is odd")
 }

 console.warn('else if condition');

//                                      else if ladder
//  wap to show the number is positive or negative

let num2='a';
if(num2>0){
    console.log(num2+' is positive number');
}
else if (num2<0) {
    console.log(num2+' is a negative number');
}
else {
    console.log(num2+'is not positive or negative');
}

//                                          nested if 

// wap to check the input is number or not if number print even or odd

let a=10
if (typeof a =='number'){
    if (a%2==0){
        console.log(`${a} is a even number`)
    }
    else{
        console.log(`${a} is a odd number`)
    }
}
else{
    console.log(`${a} is not a number`)
}
// examle of nested if
let email='abc@gmail.com'
let pwsd='12345'
if (email ==="")

