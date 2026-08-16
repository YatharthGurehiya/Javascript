let score = "Yatharth"

console.log (typeof score)
console.log (typeof (score))
//both case is valid

let valueInNumber=Number(score)
console.log (typeof valueInNumber)
console.log (valueInNumber)

// "33" => 33
//  "33abc" => NaN
// true => 1; false => 0
// "Yatharth" => NaN

let IsLoggedIn = "Yay"
let booleanIsLoggedIn=Boolean(IsLoggedIn)
console.log (typeof booleanIsLoggedIn)
console.log (booleanIsLoggedIn)

// 1 => true; 0 => false;
// "" => false; "Yath" => true;

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)

//it will convert anything to the string

//***************************Operations******************************//

let value = 3
let negValue = -value
console.log(negValue)

//for the -ve value

console.log(2+2)  //for addition
console.log(2-2)  //for substraction
console.log(2*2)  //for multiplication
console.log(2**3) //for power of the number
console.log(2/3) //for divide
console.log(2%3) //for remainder

let str1=("Hello")
let str2=(" World")
let str3 = (str1+str2)
console.log(str3)

//for adding strings

console.log("1"+2); //output will be "12" because if 1st is in string whole will be treated as string
console.log(1+"2"); //output will be "12" only
console.log("1"+"2") //output will be "12" only because if 1st is in string whole will be treated as string
console.log("1+2") //output will be "1+2" because "" uses to display strings
console.log(1+2) //output will be "3"
console.log("1"+2+3) //output will be "123"
console.log("1"+(2+3)) //output will be "15" in this the whole is treated in string but (2+3) is in bracket so it is not treated as string
console.log(1+2+"2") //output will be "32" first operation then string
console.log(1+"2"+3); //output will be "123"

console.log(Boolean(1)); //will print "true"
console.log(Boolean(2)); //will print "false"

console.log(+true); //will print "1"
console.log(+"") //will print "0"

let num1, num2, num3
num1=num2=num3=2+2

let gamecounter = 100
gamecounter++//or ++gamecounter  //++ is used for giving +1(++gamecounter will increase value before while gamecount++ will increase value later)
console.log(gamecounter); //it will print 101

let gamingcounter = 100
--gamingcounter//or gamingcounter-- //-- is used for giving -1(--gamecounter will increase value before while gamecount-- will increase value later)
console.log(gamingcounter);
















