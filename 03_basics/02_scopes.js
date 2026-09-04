//var c=300
let a=300
if (true) {
    let a = 10
    const b = 20
    //var c = 30
    console.log("INNER:", a); 
}

//curly brackets are scopes{}
//we usually avoid var and use let


console.log(a)
// console.log(b)
// console.log(c)

//        nested scope         //

function one(){
    const username = "Yatharth"

    function two(){
        const website =  "youtube"
        console.log(username)
    }
    // console.log(website); // you cannot access it since its scope has been ended
    two()
}

one() 

if(true){
    const username="Yatharth"
    if(username==="Yatharth"){
        const blankspace = " "
        const website = "Youtube"
        // console.log(username+blankspace+website);
        
    }
    // console.log(website) // we cannot access the scope after its closer
}
// console.log(username) // we cannot access the scope values after its closer

//  +++++++++++++++++++++++++++ interesting ++++++++++++++++++++++
// ways to make functions
console.log(addone(5)) //we can use the functiion anywhere in the code even before it is created
function addone(num){
    return num+1

}

addone(5)

// addTwo(5) // in this type of function you cannot use it before the function is created
const addTwo=function(num){
    return num + 2;
}

addTwo(5)

//conclusion is that its the best to use the function call after the function is created!!!!!