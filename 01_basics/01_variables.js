const accountId = 144553
//constant is used for the fixed values

let accountEmail = "yatharth@gmail.com"
//we use let instead of var

var accountPassword = "12345"

accountCity = "UP"
// we use this without any const, let but it is not recommended
 
let accountStatus
// accountId = 2 //not allowed cuz it is contant and already defined above

accountEmail="yath@gmail.com"
accountPassword="15468"
accountCity="PP"
accountState="Active"

console.log(accountId);
//this is used to show the value

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
// do not to use var because of issue in block scope and functional scope