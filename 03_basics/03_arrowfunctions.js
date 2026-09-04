const user={
    username: "Yatharth",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //this is used to obtain the current scope object
        console.log(this);
        
    }

}

user.welcomeMessage()
user.username = "Gurehiya"
user.welcomeMessage()

console.log(this) // it will give empty cuz in node this refers to the scope object only

// it was all prerequesties!

function chai(){
    let username="Yatharth"
    console.log(this)
}
// in the node environment if you print only this in function inside the node so it will give many functions such as global
// this is only for the object not for the function it will give the undefined 
chai()

const chai = function(){
    let username = "Yatharth"
    console.log(this.username);
    
}

//below is how we define the arrow function
const chai = ()=>{
    let username = "Yatharth"
    console.log(this);
}


chai()

//syntax of arrow funtion is
// () => {}

// below is the explicit function

const addTwo=(num1,num2)=>{
    return num1+num2

}

// it is also used as implicit and it is below remember it cuz it is massly used in react.js

const addTwo=(num1,num2)=> num1+num2
const addTwo=(num1,num2)=>(num1+num2)

// in the explicit function we give the return while in implicit return is not used

const addTwo=(num1,num2)=>{username: "Yatharth"} // this will give undefined cuz we haven't gave () parenthesis it is syntax of arrow function
const addTwo=(num1,num2)=>({username: "Yatharth"}) // this will work cuz we gave parenthesis


console.log(addTwo(1,2))

//arrow function is used in loops a small example is below
const myArray = [2,66,2,4,77]
myArray.forEach(function() {}) // it is for basic function
myArray.forEach(()=>())


//for interview 

// A normal function gets its own this.
// An arrow function does not get its own this. It uses this from the surrounding scope.