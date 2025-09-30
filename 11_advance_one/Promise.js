/* Promise JavaScript ka ek object hai jo asynchronous operation (jaise API call, file read, timer, database query) ke result ko future me represent karta hai.

✅ Ek Promise ke 3 states hote hain:

.Pending → Kaam abhi chal raha hai. (e.g. server se data fetch ho raha hai)

.Fulfilled (Resolved) → Kaam successfully complete ho gaya (result mil gaya).

.Rejected → Kaam fail ho gaya (error aayi). */


const promiseOne = new Promise(function(resolve, reject){ // yha promise do hi kaam jr skta hai ya to reject ya to resolve..

})