/* Promise JavaScript ka ek object hai jo asynchronous operation (jaise API call, file read, timer, database query) ke result ko future me represent karta hai.

✅ Ek Promise ke 3 states hote hain:

.Pending → Kaam abhi chal raha hai. (e.g. server se data fetch ho raha hai)

.Fulfilled (Resolved) → Kaam successfully complete ho gaya (result mil gaya).

.Rejected → Kaam fail ho gaya (error aayi). */

// Promise ka creation:
const promiseOne = new Promise(function(resolve, reject){ // yha promise do hi kaam jr skta hai ya to reject ya to resolve.., promise introduce in ES6.
   // DO an async task                                    // resolve aur reject call back hai issliye hum isse function main likh rhe hai..
   // DB calls , cryptography, network
   setTimeout(function () {
       console.log('Async task is complete');
       resolve()// resolve call hone ka matlab hai promise "fulfilled" ho gaya
   }, 1000)
})
// Promise consume krna:
promiseOne.then(function (){//Jab promise resolve() hoga to .then() ke andar wala function trigger hoga.
    console.log('Promise consumed');
    
})
// node 11_advance_one/Promise.js

//Promise creation 2

new Promise(function(resolve, reject){
    setTimeout(function(){
       console.log('async task 2');
       resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolve");
})

// resolve aur reject dono functions Promise ke andar decision buttons ki tarah hote hain:

// "Green button" = resolve → sab sahi hai

// "Red button" = reject → kuch galat ho gaya


//Promise creation 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Ashish", email: "abc@alpha.com"})//hum resolve mai parameter mai value bhi paas kr skte hai..
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user); //resovle mai jo bhi parameter hum pass krnege wo hme yha .then mai mil jayega.  

})

// Promise creation 4

const promisefour =new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userid: "AkGautam", pass: "abc@123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
}) 

promisefour
.then((user)=>{
     console.log(user);
     return user.userid// next .then ko userid paas krega..
})
.then((userid)=>{
    console.log(userid)
}) 
.catch((error)=>{
    console.log(error); 
}) .finally(()=> console.log('The promise is either resolve or rejected'))

/* => executor function → jo promise ke andar likha hai (resolve/reject).

1: .then() callback #1 → resolve se aayi value handle karta hai.

2: .then() callback #2 → pehle .then() ka return handle karta hai.

3: .catch() callback → agar reject hua to error handle karta hai.

4: .finally() callback → hamesha last me chalta hai (success/failure dono me). */

// Promise creation 5

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userid: "Janvi", pass: "abc@123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)

})

async function consumePromiseFive(){
    try {
       const response = await promiseFive
       console.log(response)
    } catch (error) {
        console.log('error');
        
    }
}
consumePromiseFive()

/* async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
        // const data = response.json()
        // console.log(data)
    } catch (error) {
        console.log("E:", error);
       
    }
}
getAllUser()
 */
fetch('https://api.github.com/users/AshishKumar1603')
.then ((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))
    