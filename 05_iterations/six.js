const coding = ["js","ruby", "java", "python", "cpp"]

const values = coding.forEach((item)=>{
    console.log(item);
    return item
} )

console.log(values); //foreach doesn't returns the values

// filter Operations
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num)=> num>4)

const number = myNums.filter( (num)=> {
    return num<4
})

console.log(newNums)

console.log(number);

// end of filter

// doing same in foreach

const newNums = []

myNums.forEach((num)=> {
    if (num>4) {
        newNums.push(num)
    }
})

console.log(newNums);


//getting the data from database or api to show it
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1989, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 2009, edition: 2004 },
    { title: 'Book Five', genre: 'Science', publish: 1987, edition: 2008 },
    { title: 'Book Six', genre: 'Fiction', publish: 1986, edition: 2006 },
    { title: 'Book Seven', genre: 'History', publish: 2011, edition: 2003 },
    { title: 'Book Eight', genre: 'Science', publish: 1991, edition: 2001 },
    { title: 'Book Nine', genre: 'Non-fiction', publish: 2001, edition: 2002 }
]

let userbooks = books.filter((bk)=>bk.genre==='History')
// const userbooks = books.filter ((bk) => bk.publish >= 2000) //it would not run cuz the userbook is already declared
userbooks = books.filter ((bk) => bk.publish >= 1995&&bk.genre==='History')
console.log(userbooks);
