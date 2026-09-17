// we can use the loops in the objects by the help of forin loops
// it will give error if we use forof loop in the objects

const myObject = {
    js: 'javascript', 
    cpp:'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

//lets see whether forin can be used for the arrays too?

const programming = ["js","rb","py", "cpp"]

for (const key in programming) {
console.log(programming[key]);
// we can use the forin loop in the objects as well as in the arrays
}


//the map is not iteratable so we cannot write it in this way
const map=new Map()
map.set(`IN`, "India")
map.set(`USA`, "United States of America")
map.set(`FR`, "France")
map.set(`IN`, "India")

for (const [key, value] in map) {
console.log(key, ":-", value);

}

// so for the arrays we will use forof loops but for the objects we will use the forin loops

