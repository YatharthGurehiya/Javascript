// Immediately Invoked Function Expressuions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();

// ; ending is important to end in the IIFE !!!

// ()() //here first () for the definition of the function while second () is for the execution call

// An IIFE (Immediately Invoked Function Expression) creates its own scope and executes immediately. It helps prevent variables and function declarations from polluting the global scope and avoids naming conflicts

( ( name) => {
    //SIMPLE IIFE or 
    console.log(`DB CONNECTED TWO ${name}`)
})(`Yatharth`); 