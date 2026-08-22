const marvel_heroes=["Thor","ironman","loki"]
const dc=["Batman","Superman","Flash"]

marvel_heroes.push(dc)
console.log(marvel_heroes) //to merge the 2 arrays
console.log(marvel_heroes[3][1]) //to show the value of that index

const allHeros = marvel_heroes.concat(dc) //combines 2 or more array to create a new array
console.log(allHeros); 

// Spread
const all_new_heros=[...marvel_heroes,...dc]
console.log(all_new_heros) //it spreads the element of the arrays

/*limitation is in the concatnation cuz we can only concat two arrays while using spread we can merge more than two arrays
*/

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array= another_array.flat(Infinity)  //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array); // spreads the bad format array into the good format array



console.log(Array.isArray("Yatharth")) //it checks whether the given is array or not
 console.log(Array.from("Yatharth"));// it converts the given into array


console.log(Array.from({name: "Yatharth"})); //check it out later (Interesting)


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); //Returns a new array from a set of elements




