//************************************Conversion****************************************************

let  score = null

//console.log(typeof score)
//console.log(typeof (score))

let valueInNumber = Number(score)

//console.log( typeof valueInNumber)
console.log(valueInNumber);

//"33"=> 33
//"33abc"=> NaN (not a number)
//true => 1; false=> 0

let Create = 1

let booleanCreate = Boolean(Create)

//console.log(booleanCreate)

// 1=> true; 0=> false
// "" => false
// "Ashish" => true

let someNumber = 33

let str_num = String(someNumber)
//console.log(str_num)

//console.log(typeof str_num)

//************************************ Operation****************************************************

let value = 3

let negvalue = -value

console.log(negvalue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " Ashish"

let str3 = str1+str2

console.log(str3);
let num = "1"+2
console.log(num) // 12 because the 1 has string datatype so while adding the "1"+2 is coverted into string.
//console.log(1 +"2") //12 it also converted into string datatype.
//console.log("1" + 2 +2) // 122 the first datatype is string so it change according to that into string.
//console.log(1+ 2+ "2") // 32 the first two data type are int so they add up and then change to string
 console.log(typeof num)