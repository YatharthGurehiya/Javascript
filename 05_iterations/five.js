// this loop is being used max of the times which is foreach loops

const coding = ["js", "ruby", "python", "java", "cpp"]

// there are four types in which we can define the forEach Loop

// coding.forEach(function (val){
//     console.log(val)
// })

// coding.forEach( (Item)=>{
// // console.log(Item)
// })

// coding.forEach(Item => {
//     console.log(Item);
    
// });

// function preintMe(item){
//     console.log(item)

// }

// coding.forEach( preintMe)

// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
    
// } )


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "java",
        languageFileName: "JAVA"
    },
    {
        languageName: "Python",
        languageFileName: "PY"
    },


]

myCoding.forEach(item=>{
    console.log(`The Language name is ${item.languageName} and file name is ${item.languageFileName}`)
});