// ***********Function in js************

//Block of code that performs a specific task, can be invoked(call) whenever needed.

/* e.g console.log("hello")
    "abs".toUpperCase()
    [1, 2, 3].push(4) 
    here we se log , toUpperCase, push do the same work again and again and these are 
    called function , function is a peice of code the do the same work again and again..
    

    --> Whenever we use function we use parenthesis() with then it use to call the function
        means use the function..
        like : push() , push is a function nad () it is use for call it.. 
 */


 //************------How to Write a Function------************** :
 
 /* 1. function definition:

 yha p hum batate hai ki kaam hoga kya ya kaam krna kya hai...

 --> function functionName() { // phle hum function keyword likhte hai fir function ka name likhte hai then parenthesis() use krte hai function ko call krne k liye.
    
    // do some work...  // { ye hai block of code jiske ander hme kya krna hai wo likhte hai }
    
    } */

  /* 2. function Call
  
  jo bhi task ya kaam hai usse krwane k liye hm function ko call krte hai.. 

  ---> functionName(); */

  // --->> Function hme Redundency(repeat) se bachata hai...

  //e.g:
   /* function myFunction() {
    console.log("Ashish")
    console.log("Kumar")
  }
  myFunction(); // function call

  //************--Parameter and arguments************** :

  function myfunction(msg) { // parenthesis k ander jo input paas ho rha h wo parameter   hai...
    console.log(msg)
  }
  myfunction("My name is Ashish");// function call k ander jo messege paas ho rha hai wo argument hai.. */


  // function --. 2 numbers, sum:

  function sum(x, y){
    console.log(x+y);
  }
  sum(23, 45)

  // how to return value in function:

  function Sum(x, y) {
    s = x + y;
    return s;
    
  } Sum(34, 65); // it didn't print something it just return the value...

  // let val = Sum(34, 65)
//   console.log(val)

// *--> Function parameter --> like a local variables of function --> block scope

//*************---Arrow Function---************** :

/* Compact way of writing a function

'=>' --> this is arrow function 

const functionName = (param1, param2...)=>{
  do some work    
}
 */
  /* const arrowSum = (a, b)=>{
    console.log(a+b)
};
arrowSum(76,54) */

// let vowels = [a,e,i,o,u]
// let stringname = "hello"
// const count = "0"
/* function countvowel(str){
  let count = 0;
    for(let char of str){
        if( char === "a" ||
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
          ){
            count++
        }

    }console.log(count)

} countvowel("hello") */



const countVow = (str) => {
  let count = 0;
    for(let char of str){
        if( char === "a" ||
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
          ){
            count++
        }

    }console.log(count)

}; countVow("hello")