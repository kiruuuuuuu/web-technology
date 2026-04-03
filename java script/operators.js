document.writeln('operators')


console.warn('+ - operator')


console.log(10+20)
console.log("10" + 20)
console.log(20-10)
console.log("20"-10)
console.log(10+'a')
console.log(10-'a')
console.log(10+true)
console.log(10+'true')
console.log(10-'true')


console.log(10+true-'a')
console.log(10-true-'a')
console.log(10+'true'-1)


console.log(true+10-false+'10')
console.log(true+'10'-false+10)
console.log(true+10+'false'+10-5)

console.log('3'+'3'-'3')
console.log(true+1)
console.log(undefined+1)
console.log(NaN+1)
console.log(NaN+'1')
console.log(undefined+1+NaN)
console.log('undefined'+1+NaN)
console.log(NaN+'a')


console.warn('arithmetic operator')

let exp1=10+5*2/2-5;
console.log(exp1)  // 10

let exp=25+2+'0'+(true*3)+20+(true+1-false)+(5+2);
console.log(exp) // 27032027

console.warn('relational operator')

console.log(10>5)
console.log(10<5)
console.log(10>=5)
console.log(10<=5)
console.log(10==5)
console.log(10!=5)

console.warn('equality operator')
console.log(10==10)
console.log(10=='10')
console.log(true==1)
console.log(true!=1)

console.warn('strict equality operator')
console.log(100===100)
console.log(100==='100')
console.log(true===1)

console.warn('logical operator')
console.log(10=='10') && (true===1) //||(10===10)

console.warn('bitwise operator')
console.log(5&1)
console.log(5|1)

console.warn('assignment operator')
let a=10; // = is the assignment operator
console.log(a)

console.warn('short hand assignment operator')
let num=10;
console.log(num)
num+=5; // num=num+5
console.log(num)
num-=5;
console.log(num)
num*=5;
console.log(num)
num/=5;
console.log(num)

console.warn('unary operator')
let a1=10;
let b1=5;
let c1= a1++ + ++b1 + b1-- + a1--;
console.log(c1)

let a2=5;
let b2=5;
let c2= a2++ + a2++ + --b2 + b2-- + a2++ + --a2 + ++b2 + a2-- + --b2;
console.log(c2)

console.warn('ternary operator')
let a3=10;
let b3='10';
(a3===b3)?console.log('hello'):console.log('bye')