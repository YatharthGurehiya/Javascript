const userEmail="h@hitesh.ai"

if (userEmail) {
    console.log("Got user email");
}else{
    console.log("Don't have user email")
}

//if there is anything in the string it will follow the condition else not
//empty array will get true but the empty array won't get it true

//falsy values
// false, 0, -0(only for interviews), BigInt 0n, "", null, undefined, NaN 

//truthy values
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length===0){
    console.log("Array is empty");
}

const emptyObj={}

if (Object.keys(emptyObj).length===0) {
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1=5??10 // if the value coming is null or undefined the system will use the other value provided 
// val1=null??10// it is basically do the safety check if null or undefined is coming
// val1 = undefined??15
val1= null??10??15// it assigns the first value

console.log(val1);

// Terniary operator

condition?true:false

const iceTeaPrice=100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


