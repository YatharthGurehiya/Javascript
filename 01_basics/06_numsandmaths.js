const score = 123
console.log(score)

const balance = new Number(100)
console.log(balance); //it gives the number

// Number {100}
// [[Prototype]]
// : 
// Number
// constructor
// : 
// ƒ Number()
// toExponential
// : 
// ƒ toExponential()
// toFixed
// : 
// ƒ toFixed()
// toLocaleString
// : 
// ƒ toLocaleString()
// toPrecision
// : 
// ƒ toPrecision()
// toString
// : 
// ƒ toString()
// valueOf
// : 
// ƒ valueOf()
// [[Prototype]]
// : 
// Object
// [[PrimitiveValue]]
// : 
// 0
// [[PrimitiveValue]]
// : 
// 100


console.log(balance.toString()); //it makes the number to string
//since we have created it string so we can now use all the functions of the string such as length,concat etc.
console.log(balance.toString().length); 

console.log(balance.toFixed(2));//it gives the precision value such as it will be "100.00"

const otherNumber = 23.035468
console.log(otherNumber.toPrecision(4)); //Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

const hundreds=1000000
console.log(hundreds.toLocaleString()) // it is the value in format of US such as print will be "1,000,000"
console.log(hundreds.toLocaleString('en-IN')); // it will give in the indian number system such as it will print for the current valure "10,00,000"

//***************************************************MATHS*************************************************/


console.log(Math);

// Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
// E
// : 
// 2.718281828459045
// LN2
// : 
// 0.6931471805599453
// LN10
// : 
// 2.302585092994046
// LOG2E
// : 
// 1.4426950408889634
// LOG10E
// : 
// 0.4342944819032518
// PI
// : 
// 3.141592653589793
// SQRT1_2
// : 
// 0.7071067811865476
// SQRT2
// : 
// 1.4142135623730951
// abs
// : 
// ƒ abs()
// acos
// : 
// ƒ acos()
// acosh
// : 
// ƒ acosh()
// asin
// : 
// ƒ asin()
// asinh
// : 
// ƒ asinh()
// atan
// : 
// ƒ atan()
// atan2
// : 
// ƒ atan2()
// atanh
// : 
// ƒ atanh()
// cbrt
// : 
// ƒ cbrt()
// ceil
// : 
// ƒ ceil()
// clz32
// : 
// ƒ clz32()
// cos
// : 
// ƒ cos()
// cosh
// : 
// ƒ cosh()
// exp
// : 
// ƒ exp()
// expm1
// : 
// ƒ expm1()
// f16round
// : 
// ƒ f16round()
// floor
// : 
// ƒ floor()
// fround
// : 
// ƒ fround()
// hypot
// : 
// ƒ hypot()
// imul
// : 
// ƒ imul()
// log
// : 
// ƒ log()
// log1p
// : 
// ƒ log1p()
// log2
// : 
// ƒ log2()
// log10
// : 
// ƒ log10()
// max
// : 
// ƒ max()
// min
// : 
// ƒ min()
// pow
// : 
// ƒ pow()
// random
// : 
// ƒ random()
// round
// : 
// ƒ round()
// sign
// : 
// ƒ sign()
// sin
// : 
// ƒ sin()
// sinh
// : 
// ƒ sinh()
// sqrt
// : 
// ƒ sqrt()
// sumPrecise
// : 
// ƒ sumPrecise()
// tan
// : 
// ƒ tan()
// tanh
// : 
// ƒ tanh()
// trunc
// : 
// ƒ trunc()
// Symbol(Symbol.toStringTag)
// : 
// "Math"
// [[Prototype]]
// : 
// Object

console.log(Math.abs(-4)); // it converts any negative value to the positive but the positive value will remain the positive
console.log(Math.round(4.3)) // to round of the number
console.log(Math.ceil(4.3)) // to round of to the top value in this case it will give "5"
console.log(Math.floor(4.9))// it will take the lower value in this case it will give "4"
// there is sqrt for the square root 
// there is pow for the power of the number
console.log(Math.min(4,3,6,32,6)); // it is used to find the minimum number in the given value
console.log(Math.max(4,645,78,342345)) // it is used to find the max value in the given number
console.log(Math.random());// it gives the random value between the 0,1
console.log(Math.random()*100);// it multiplies the random value with the number in multiplied
console.log((Math.random()*100)+1);// the random value can also give 0,so we use the +1 to ensure that the value should come minimum 1
console.log(Math.floor(Math.random()*100)+1);// uses to get the floor value of the decimal
console.log(Math.ceil(Math.random())+1)// uses to get the ceiling(top) value of the decimal number


const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1))) // here the range is not getting follwed so we will do +min in the next code
console.log(Math.floor(Math.random()*(max-min+1))+min)// here we will get the random value between the range



