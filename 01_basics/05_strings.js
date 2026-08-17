//For adding the stings concatination
const name = "Yatharth"
const repoCount = 50

// console.log(name+repoCount+" Value"); //these days no one uses this method use the below one for modern

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //stringinterpolation (Use this method)

const gameName=new String(`Yatharth-gurehiya-01`) //String Initialization

console.log(gameName[0]); //accessing the character from the string
console.log(gameName.__proto__); 

console.log(gameName.length);  //for the length of the string

// anchor: ƒ anchor()
// at
// : 
// ƒ at()
// big
// : 
// ƒ big()
// blink
// : 
// ƒ blink()
// bold
// : 
// ƒ bold()
// charAt
// : 
// ƒ charAt()
// charCodeAt
// : 
// ƒ charCodeAt()
// codePointAt
// : 
// ƒ codePointAt()
// concat
// : 
// ƒ concat()
// constructor
// : 
// ƒ String()
// endsWith
// : 
// ƒ endsWith()
// fixed
// : 
// ƒ fixed()
// fontcolor
// : 
// ƒ fontcolor()
// fontsize
// : 
// ƒ fontsize()
// includes
// : 
// ƒ includes()
// indexOf
// : 
// ƒ indexOf()
// isWellFormed
// : 
// ƒ isWellFormed()
// italics
// : 
// ƒ italics()
// lastIndexOf
// : 
// ƒ lastIndexOf()
// length
// : 
// 0
// link
// : 
// ƒ link()
// localeCompare
// : 
// ƒ localeCompare()
// match
// : 
// ƒ match()
// matchAll
// : 
// ƒ matchAll()
// normalize
// : 
// ƒ normalize()
// padEnd
// : 
// ƒ padEnd()
// padStart
// : 
// ƒ padStart()
// repeat
// : 
// ƒ repeat()
// replace
// : 
// ƒ replace()
// replaceAll
// : 
// ƒ replaceAll()
// search
// : 
// ƒ search()
// slice
// : 
// ƒ slice()
// small
// : 
// ƒ small()
// split
// : 
// ƒ split()
// startsWith
// : 
// ƒ startsWith()
// strike
// : 
// ƒ strike()
// sub
// : 
// ƒ sub()
// substr
// : 
// ƒ substr()
// substring
// : 
// ƒ substring()
// sup
// : 
// ƒ sup()
// toLocaleLowerCase
// : 
// ƒ toLocaleLowerCase()
// toLocaleUpperCase
// : 
// ƒ toLocaleUpperCase()
// toLowerCase
// : 
// ƒ toLowerCase()
// toString
// : 
// ƒ toString()
// toUpperCase
// : 
// ƒ toUpperCase()
// toWellFormed
// : 
// ƒ toWellFormed()
// trim
// : 
// ƒ trim()
// trimEnd
// : 
// ƒ trimEnd()
// trimLeft
// : 
// ƒ trimStart()
// trimRight
// : 
// ƒ trimEnd()
// trimStart
// : 
// ƒ trimStart()
// valueOf
// : 
// ƒ valueOf()
// Symbol(Symbol.iterator)
// : 
// ƒ [Symbol.iterator]()
// [[Prototype]]
// : 
// Object
// [[PrimitiveValue]]
// : 
// ""
// [[PrimitiveValue]]
// : 
// "Yatharthgurehiya"


// console.log(gameName.toUpperCase()) //for the uppercase
// // console.log(gameName.charAt(t)); //will give error
// console.log(gameName.charAt(2)); //for position of the character
// console.log(gameName.indexOf('t'))//for specific charater position

const newString=gameName.substring(0,6)
console.log(newString); //it print the character between range specified

const anotherString=gameName.substring(-8,2)
console.log(newString) //it ignores the negative values

const newStringOne="    sakhdia     "
console.log(newStringOne)
console.log(newStringOne.trim()) // it removes the starting and end spaces from the string 
console.log(newStringOne.trimStart()); //it removes the  starting space of the string 
console.log(newStringOne.trimEnd())// it removes the end space of the string

const url="https://yatharth.com/yatharth/yatharth%20gurehiya" //browser uses %20 instead of the spaces cuz it doesn't understand empty spaces
console.log(url.replace('%20', '-')) //replaces the words with the given words
console.log(url.includes('yatharth')) //it tells whether the value is present or not

console.log(gameName.split('-')) // it split the string if there is any value is present in that (Seprator)

console.log(gameName.small())

