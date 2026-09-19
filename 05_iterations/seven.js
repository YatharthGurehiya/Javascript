const mynums = [1, 2, 3, 4, 5, 6, 7,8 ,9 , 10]

const newnums = mynums.map( ( num)=>num + 10)

console.log(newnums);

// maps is better than foreach

//channing
const newNums = mynums
                .map((num)=> num *10) 
//value will come the value of 1st  
                .map((num)=>num + 1)
                .filter((num) =>num/2===20.5)

console.log(newNums);
