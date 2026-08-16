// PRIMITIVE

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// JS is dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId);

// const bigNumber = 756172341254871548142512


// Reference (Non-Primitive) (the datatype of Non-Primitive is object only)

// Array, Objects, Functions

const heros=["IronMan","thor","Loki"]

let myObj={
    name:"Yatharth",
    age: 22,
}

const myFunction = function(){
     console.log("Hello world");

}

console.log(typeof score);
console.log(typeof scoreValue)
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id)
console.log(typeof anotherId);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);







