// for of

// ["", "", ""] // strings inside the array

//similarly we can put objects inside the array
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings ="Hello World!"
for (const greet of greetings) {
    if (greet==" ") {
        console.log(`It ends here`);
        break
    }
    console.log(`Each char is ${greet}`);
}

//Maps

const map=new Map()
map.set(`IN`, "India")
map.set(`USA`, "United States of America")
map.set(`FR`, "France")
map.set(`IN`, "India") // it will not be print cuz maps is known for the unique values
//maps follows the order what we enters

console.log(map);

// please try to print this
for (const [key, value] of map) {
console.log(key, ':-', value);
}

const myObject = {
    'Game1': 'NFS',
    'Game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
// console.log(key, ':-', value);
    
// // objects are not iteratable by the help of the forof and for that we need to do other methods
// }

