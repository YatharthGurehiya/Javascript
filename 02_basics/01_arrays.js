//array (read in brief abt slice and splice)

const myArr=[0/*0*/,1,2,3,4,5]//always written in big brackets. 0,1,2,3,4,5 is elements
const myheroes=["ironman","thor","loki"]

const myArr2=new Array("Hello","World")
console.log(myArr); // this is how we access arrays
console.log(myheroes[2]);
console.log(myArr2[1]);

//Array methods

myArr.push(6)//we get the values starting from 0 till the element we defined
myArr.push(7)
myArr.pop() // removes the last value of the array no matters what it is

myArr.unshift(4) //adds the value we gave in the first of the array and shifts all the value of array
myArr.shift() // removes the first value from the array

console.log(myArr.includes(9)); // it ask the array if that element is present if yes it send true else false it is all boolean
console.log(myArr.indexOf(9));// it gives -1 if the value asked is not in the index else it tells the index of that value


const newArr=myArr.join() //adds all the element into a string

console.log(myArr);
console.log(newArr);

// slice, splice

console.log("A ",myArr)

const myn1=myArr.slice(1, 3) //returns a copy of section of array
console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);


 


