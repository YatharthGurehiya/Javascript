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