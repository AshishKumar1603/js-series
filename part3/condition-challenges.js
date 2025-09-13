// Checking if a number is grater than another number:

let num1 = 5
let num2 = 8

if(num1 > num2){
    console.log("num1 is greater than num2")
} else {
    console.log("Nope, num1 is not greater")
}

//Checking if a String is equal to another string:

let username = "chai";
let anotherUsername = "chai";

if(username != anotherUsername){
    console.log("pick another username");
}else{
    console.log("Pick this username");
}

// Checking if a variable is a number or not:

let score = 44 ;

if(typeof score === "number"){
    console.log("yes, this is number");
}else{
    comsole.log("No that is not a number");
}
 
let anotherscore = []

if(typeof anotherscore ==="object"){
    console.log("yes this is an array");
}else{
    console.log("this is not an array");
}

// Checking boolean value is true or false:

let isTeaReady = false;

if(isTeaReady){
    console.log("tea is ready");
}else("tea is not ready")// here it give the result based on the true or false..

//Checking if an array is empty or not:
let items = []

console.log(items.length)
if(items.length === 0){
    console.log("Array is empty")
}else{
    console.log("Array is ni=ot empty")
}