// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best number")
    }
    console.log(element);

}
 console.log(element); //not assesible out of the scope

for (let i = 0; i <= 10; i++) {

    console.log(`outer loop value:${i}`);
    
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner Loop value ${j} and inner loop ${i}`);
        console.log(i+'*'+ j + ' = ' + i*j); //performing arithmetics
    }
    
}
let myarray = ["Flash, Batman, Superman"]
console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);   
}

//keywords: break and continue

for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`Detected 5`)
        break; //after the break the scope will break and will not continue further
    }
    console.log(`value of i is ${index}`)
}

for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`Detected 5`)
        continue; //after the break the scope will break and will not continue further
    }else if(index==6){
        console.log(`Stopped`)
        break;
    }
    console.log(`value of i is ${index}`)
}