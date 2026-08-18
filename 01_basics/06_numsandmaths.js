const score = 123
console.log(score)

const balance = new Number(100)
console.log(balance); //it gives the number

// Number object containing the value 100
// Number {100}

// The object inherits properties and methods from Number.prototype
// [[Prototype]]: Number

// Number constructor
// constructor: ƒ Number()

// Converts the number to exponential notation
// toExponential: ƒ toExponential()

// Formats the number using fixed-point notation
// toFixed: ƒ toFixed()

// Converts the number to a locale-specific string
// toLocaleString: ƒ toLocaleString()

// Formats the number to a specified precision
// toPrecision: ƒ toPrecision()

// Converts the number into a string
// toString: ƒ toString()

// Returns the primitive value of the Number object
// valueOf: ƒ valueOf()

// Number.prototype inherits from Object.prototype
// [[Prototype]]: Object

// Primitive value of Number.prototype
// [[PrimitiveValue]]: 0

// Primitive value stored inside the Number object
// [[PrimitiveValue]]: 100


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

// Math is a built-in object that provides mathematical constants and methods
// Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}

// Euler's number (e)
// E: 2.718281828459045

// Natural logarithm of 2
// LN2: 0.6931471805599453

// Natural logarithm of 10
// LN10: 2.302585092994046

// Base-2 logarithm of Euler's number
// LOG2E: 1.4426950408889634

// Base-10 logarithm of Euler's number
// LOG10E: 0.4342944819032518

// Ratio of a circle's circumference to its diameter
// PI: 3.141592653589793

// Square root of 1/2
// SQRT1_2: 0.7071067811865476

// Square root of 2
// SQRT2: 1.4142135623730951

// Returns the absolute value of a number
// abs: ƒ abs()

// Returns the inverse cosine of a number
// acos: ƒ acos()

// Returns the inverse hyperbolic cosine of a number
// acosh: ƒ acosh()

// Returns the inverse sine of a number
// asin: ƒ asin()

// Returns the inverse hyperbolic sine of a number
// asinh: ƒ asinh()

// Returns the inverse tangent of a number
// atan: ƒ atan()

// Returns the angle between the positive x-axis and a point (x, y)
// atan2: ƒ atan2()

// Returns the inverse hyperbolic tangent of a number
// atanh: ƒ atanh()

// Returns the cube root of a number
// cbrt: ƒ cbrt()

// Rounds a number up to the nearest integer
// ceil: ƒ ceil()

// Counts the leading zero bits in a 32-bit integer
// clz32: ƒ clz32()

// Returns the cosine of an angle in radians
// cos: ƒ cos()

// Returns the hyperbolic cosine of a number
// cosh: ƒ cosh()

// Returns Euler's number raised to a given power
// exp: ƒ exp()

// Returns e raised to a power minus 1
// expm1: ƒ expm1()

// Rounds a number to the nearest 16-bit floating-point value
// f16round: ƒ f16round()

// Rounds a number down to the nearest integer
// floor: ƒ floor()

// Rounds a number to the nearest 32-bit floating-point value
// fround: ƒ fround()

// Returns the square root of the sum of the squares of given numbers
// hypot: ƒ hypot()

// Performs 32-bit integer multiplication
// imul: ƒ imul()

// Returns the natural logarithm of a number
// log: ƒ log()

// Returns the natural logarithm of 1 plus a number
// log1p: ƒ log1p()

// Returns the base-2 logarithm of a number
// log2: ƒ log2()

// Returns the base-10 logarithm of a number
// log10: ƒ log10()

// Returns the largest number from the given values
// max: ƒ max()

// Returns the smallest number from the given values
// min: ƒ min()

// Raises a number to a specified power
// pow: ƒ pow()

// Returns a random number from 0 inclusive to 1 exclusive
// random: ƒ random()

// Rounds a number to the nearest integer
// round: ƒ round()

// Returns 1, -1, 0 or -0 according to the number's sign
// sign: ƒ sign()

// Returns the sine of an angle in radians
// sin: ƒ sin()

// Returns the hyperbolic sine of a number
// sinh: ƒ sinh()

// Returns the square root of a number
// sqrt: ƒ sqrt()

// Returns a more precise sum of the given numbers
// sumPrecise: ƒ sumPrecise()

// Returns the tangent of an angle in radians
// tan: ƒ tan()

// Returns the hyperbolic tangent of a number
// tanh: ƒ tanh()

// Removes the decimal part and returns the integer portion
// trunc: ƒ trunc()

// Defines the default string tag of the object as "Math"
// Symbol(Symbol.toStringTag): "Math"

// Math inherits properties and methods from Object.prototype
// [[Prototype]]: Object

console.log(Math.abs(-4)); // it converts any negative value to the positive but the positive value will remain the positive
console.log(Math.round(4.3)) // to round of the number
console.log(Math.ceil(4.3)) // to round of to the top value in this case it will give "5"
console.log(Math.floor(4.9))// it will take the lower value in this case it will give "4"
console.log(Math.sqrt(25))// there is sqrt for the square root 
console.log(Math.pow(5,2))// there is pow for the power of the number
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



