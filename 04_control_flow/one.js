// if statement

const isUserloggedIn=true

if(isUserloggedIn==true /*condition*/){


}

// condition operators
// <,>, <=, >=, ==, !=,  ===(check the type also), !==(it checks the negative signs)

// for the == condition
if(2=="2"){
    console.log("EXECUTED") // this will printt executed
}

// for the === condition
if(2==="2"){
    console.log("EXECUTED")// this codition is not true because type of comparison is not same
}

const temperature = 41;
if (temperature<50) {
    console.log("less than 50")
}else{
    console.log("temperature is greater than 50")
}
console.log("temperature is less than 50");

//block scope
const score=200;

if(score>100){
    const power="fly"
    console.log(`User Power: ${power}`)
}
console.log(`User Power: ${power}`) // this will not execute since the power is defined under scope and this is executed inside the scope

//short hand notation

const balance=1000

if(balance >500) 
    console.log("test"), console.log(`hello`);
// this method is only valid for the single line of codes next line will not follow the condition
//(u can use the , to make the next statement but without the , it will not check the condition for the next one)
//this one is not good for the big companies so simply use the scopes for this ones


//nesting(for the multiple conditions)
const bankbalance=1000

if(bankbalance<500){
    console.log("less than 500")
}else if(bankbalance<750){
    console.log("less than 750");
}else if(bankbalance<900){
    console.log("balance less than 900");
}else{
    console.log("Less than 1200");
}

const UserLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if (UserLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course")
}

if (loggedInFromGoogle|| loggedInFromEmail) {
    console.log(`user logged in`); 
}