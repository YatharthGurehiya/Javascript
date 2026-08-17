// dates

let myDate = new Date()
console.log(myDate) // it gives the date that is not in the readable format "2026-08-17T17:37:42.360Z"
console.log(myDate.toString());// it convert the date to the string which make it more readable "Mon Aug 17 2026 17:38:01 GMT+0000 (Coordinated Universal Time)"
console.log(myDate.toDateString()); // it only gives the current date
console.log(myDate.toLocaleString());// it gives the local string
console.log(typeof myDate);  // it gives it as a object

let mycreatedDate = new Date(2005,8,20) // it is used to give the specific date that is defined by us it follow format (YYYY,DD,MM) months start from the 0 in JS
console.log(mycreatedDate.toLocaleString());

let givenDate = new Date(2005,8,20,5,6,43) // it is used to declare the time along with the date
console.log(givenDate.toLocaleString());

let date = new Date("2005-08-20") // to give the date in format MM/DD/YYYY
console.log(date.toLocaleDateString());

let dating = new Date("08-20-2005") // to give the date in format MM/DD/YY
console.log(dating.toLocaleDateString());

let myTimeStamp = Date.now() // use to give the exact timestamp can be used for quiz 
console.log(myTimeStamp);
console.log(mycreatedDate.getTime()); // it is used to get the exact timestamp of the date
console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate()) //to get the date of today
console.log(newDate.getMonth()) //to get the month
console.log(newDate.getMonth()+1); //to get the exact month cuz in JS month start from 0 so month 8 will show 7
console.log(newDate.getFullYear()) // to get the year
console.log(newDate.getTime()) //to get the time

console.log(`today date is ${newDate.getDate()} and the time is`); //modern form of the console log

newDate.toLocaleString('default', {
    weekday: "long"
})












