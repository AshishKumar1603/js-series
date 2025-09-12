// && -> and
// || -> or
// ! -> reverse

let isloggedin = true;
let ispaid = false;

// console.log(isloggedin && ispaid)
// Here it give false output because if we want true we need both to be true because 
//we are using "and" operator...

let isEmailuser = true;
let isGoogleuser =false;

console.log(isEmailuser || isGoogleuser) // here we use or operator so if anyone of is true it 
//show true..

//------------------*****assignment_operator****---------------

let score = 10 + 11;

let num1 = 10;

num1 += 5; // it means num1 = num1 + 5

//----**opePrecedence**-----

let score = ((2 * (3 + 2)) - 1);// always use parantheses this is good practice make the code readible

console.log(score);