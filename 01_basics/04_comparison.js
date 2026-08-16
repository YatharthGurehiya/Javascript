//it gives boolean answers

// console.log(2>1); //Greater than "true"
// console.log(2>=1); //Greater than and equal to "true"
// console.log(2<1); //less than "false"
// console.log(2==1); //comparison between 2 numbers "false"
// console.log(2!=1); //if not equal to "true"

//do not compare two datatypes (it works but not recommendable)
// console.log("2">1);
// console.log("02">1);


// The reason is that an equality check == and comparisons > < >= <= work differently.
//Comparisons convert null to a number, treating it as 0. Thats's why (3) null >=0 is true
//and (1) null > 0 is false.
//(avoid them)
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
// console.log(null<=0)


//(avoid them)
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0)


// === 
console.log("2"===2);
console.log(2===2);











