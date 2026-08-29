function sayMyName() {
    console.log("Y");
    console.log("A");
    console.log("T");
    console.log("H");
}

sayMyName() //<-- executing the function

function addTwoNumbers(number1 /*parameters*/,number2) {
    console.log(number1+number2);
}


function addTwoNumbers(number1 /*parameters*/,number2) {
/*1.*/  let result = number1+number2
   return result
   console.log("Yatharth"); //<-- it won't print cuz nothing after result get printed in the function
   
/*2.*/ return(number1+number2)
}

const result=addTwoNumbers(3 /*arguments*/,5)

console.log("Result: ", result);

function loginUserMessage(username) {
    return`${username} just logged in`
}

console.log(loginUserMessage("Yatharth"))

function loginUserMessage(username) {
/*1.*/    if(username===undefined){   //only run when its true
      console.log("Please enter a username");
    }else{
    return`${username} just logged in`
    }

/*2.*/   if(!username){
      console.log("Please enter a username");
    }else{
    return`${username} just logged in`
    }
}

console.log(loginUserMessage())


/********************************************Advanced********************/

function calculateCartPrice(...num1) {  //... is rest and spread operator
    return num1                         //... closes all the values in bracket and shows it, if it was not used only 1st value will be printed
}

function calculateCartPrice(val1,val2,...num1) {  //val is used
    return num1 //val takes the values and ...num1 shows the rest of the values
}

console.log(calculateCartPrice(200,400,500,1000,1921))

const user={
    username:"Yatharth",
    age: 20
}

function handleObject(anyobject) {
    return(`${anyobject.username} is a good guy and his age is ${anyobject.age }`);
    
}

handleObject(user)
handleObject({
    username="Yatharth",
    age=20
})

const myNewArray=[200,400,600]

function returnSecondValue(getArray) {
    return getArray[1]
    
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600]));

