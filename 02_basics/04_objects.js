// singletons

const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name="Yatharth"
tinderUser.isLoggedIn=false

//here id,name and isLoggedIn is the keys
//here 123abc,Yatharth and false is the values 

// console.log(tinderUser);


//objects inside objects (known as object nesting)
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Yatharth",
            lastname:"Gurehiya"

        }
    }
}
regularUser.fullname.firstname="Aayush"
Object.freeze(regularUser.fullname)
regularUser.fullname.firstname="Aafsdnfsyush"

// console.log(regularUser.fullname);


const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}

const obj3={ obj1,obj2} //it just print { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4= Object.assign(obj1,obj2) //this merges the two objects

const obj5=Object.assign({},obj1,obj2) //this is optional parameter same as obj4 but its recommended to give it

const obj6={...obj1,...obj2} //for spreading
// console.log(obj3)
// console.log(obj4);
// console.log(obj5)
// console.log(obj6);

const users=[
    {
        id:1,
        email:"yatharth@gmail.com"
    },
    {
        id:2,
        email:"aayush@gmail.com"
    },
        {
        id:3,
        email:"yatharthgurehiya@gmail.com"
    },
]

// users[3].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))//it tells the keys
console.log(Object.values(tinderUser)) //it tells the values of the keys
console.log(Object.entries(tinderUser)); //it shows the keys with their respective values

console.log(tinderUser.hasOwnProperty('isLogged')); //it tells if the property is  available or not it answer in boolean

