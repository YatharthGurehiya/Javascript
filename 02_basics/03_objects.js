//declaring objects in two types

//singleton
//Object.create

//object laterals

const mySym=Symbol("key1")

const JsUser = {
    name:"Yatharth",
    [mySym]:"mykey1", //it is proper syntax for symbol
    age:20,
    location: "Sikkim",
    email: "Yatharth@gmail.com",
    IsloggedIn: false,
    LastLoginDay:["Monday","Saturday"]
} //object


// to access the objects values
console.log(JsUser.name);
console.log(JsUser ["name"]);
console.log(JsUser.age);
console.log(JsUser["age"]);
console.log(JsUser.location);
console.log(JsUser["location"]);
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser.IsloggedIn);
console.log(JsUser["IsloggedIn"]);
console.log(JsUser.LastLoginDay);
console.log(JsUser["LastLoginDay"]);
console.log(JsUser.mySem);//it will give undefined cuz its wrong way to define
console.log(JsUser[mySym]);//this is the way to show symbol

// Note:- Access the specific detail from . operator only but in specific cases u can use other operators

JsUser.email="Yath@gmail.com"// it is use to change specific object
Object.freeze(JsUser)//it is use to freeze the certain const of the object
JsUser.email="Yatharth@microsoft.com"//it won't work cuz we freezed the value of object
console.log(JsUser);


JsUser.greeting=function () {
    console.log("Hello Js User");
};

JsUser.greeting2=function () {
    console.log(`Hello Js User, ${this.name}` ); //use this cuz you are already in the object
};

console.log(JsUser.greeting); // it gives reference of function
console.log(JsUser.greeting())//gives the exact log
console.log(JsUser.greeting2())







