/* 
1. Write a function named makeTea that takes one parameter, type0fTea, and returns a string like "Making green tea" when called with "green tea".
Store the result in a variable named tea0rder. */

function makeTea(typeOfTea){
    return `making ${typeOfTea}`
} 
    let teaOrder = makeTea(`green tea`);


/* 
2. Create a function named orderTea that takes one parameter, teaType. Inside this function, create another function named confirmOrder that returns a message like "Order confirmed for chai".Call confirmOrder from within orderTea`and return the result. */

function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType}`;
        
    } return confirmOrder()
} let orderConfirmation = orderTea("green tea")
console.log(orderConfirmation)


//let orderConfirmation = orderTea("chai");// 
// console.log(orderTea("chai"));




//   ==>>  ################### THIS AND ARROW FUNCTION ##################3
/* 
const user ={
    username: "Navneet",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

user.welcomeMessage()
user.username ="sam"
user.welcomeMessage()
//  console.log(this);

/* function chai(){
    let username = "Navneet"
    console.log(this.username);
}
chai()
 */

 const addTwo =(num1,num2) =>{
    return num1+num2
    
} 
// console.log(addTwo(6,7))
 

/*
3. Write an arrow function named calculateTotal that takes two parameters: price and quantity. The function should return the total cost by multiplying the price and quantity.Store the result in a variable named totalCost.
*/
// const calculateTotal = ( price,quantity)=>price*quantity // (explicit way of writting in one line)
    
const calculateTotal = (price, quantity)=>{
    return price*quantity;

} 
let totalCost = calculateTotal(23, 44)
console.log(totalCost);


/* 
4. Write a function named processTeaOrder that takes another function, makeTea makeTea, as a parameter and calls it with the argument "earl grey".Return the result of calling makeTea. */

// Pehle ek function banate hain jo chai banata hai
function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}

// Ab ek function jo makeTea ko parameter ke roop me accept kare
function processTeaOrder(makeTea) {// yha processTeaOrder ek HOF(higher order function) hai
    // "earl grey" pass karke call karte hain
    return makeTea("earl grey");
}

// Call kar ke dekhte hain
let order = processTeaOrder(makeTea);
//console.log(order); // Output: Making earl grey

/*
5. Write a function named createTeaMaker that returns another function. The returned function should take one parameter, teaType, and return a message like "Making green tea".Store the returned function in a variable named teaMaker and call it with "green tea".
*/

function createTeaMaker(){
    return function (teaType) {
        return `making ${teaType}`;
    }
} 
//createTeaMaker("greentea");
let teaMaker = createTeaMaker()

console.log(teaMaker("greentea"));



/* function createTeaMaker(name) {
  let score = 100;   // ek local variable

  return function (teaType) {
    return Making ${teaType} ${name} ${score};
  };
}


let teaMaker = createTeaMaker("Navneet");  
let result = teaMaker("green tea");

console.log(result); */  


/* Jab ek inner function apne outer function ke variables ko yaad rakhta hai aur unhe baad me use kar sakta hai, chahe outer function return ho chuka ho   => CLOSURE BEHAVIOUR*/

//[[pp9890ku8j8y7gr4sq3frt7mjmu9ol0lki8gt5e]]


// **** DO NOT CHANGE the values *****
/* const a = 18;
const b = 24;

//Addition of two values
function add(a, b) {
    return a+b ;
} 
console.log(`add =`, add(a, b));

// Subtract small value from larger one
function subtract(a, b) {
  return b -a ;
}
console.log(`subtract =`, subtract(a, b));
    

function multiply(a, b) {
    return a*b ;
}
console.log(`multiply = `, multiply(a, b));

// Divide larger value by small
function divide(a, b) {
    return b/a ;
}
console.log(`divide =`, divide(a, b));

// Increase value of a by 1
function increment(a) {
    return a +1;
} 
console.log(`increment =`, increment(a));

// Decrease value of b by 1
function decrement(b) {
     return b -1;
} console.log(`decrement =`, decrement(b));

// Divide larger value by small to find the reminder
function reminder(a, b) {
    return b % a;
}
console.log(`reminder =`,reminder(a, b));
 */


let a = 18;
let b = 24;
 
function add() {
    const result = a + b;
    return result;
}
console.log(`add =`,add(a, b))
