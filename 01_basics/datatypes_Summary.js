// Premitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
 
const isloggedin = false

const outsidetemp = null
const id = Symbol('123')
const anotherId = Symbol('123')
// here both id and anotherId are same but not equal because it generate unique id so same 
//description ha no role in uniqueness internally both cretae different unique IDs..


// Reference (Non Primitive)
// Array, Objects, Functions
const heros = ["shalktiman", "naagraj","doga"];
let myObj = {
    name : "Ashish",
    age : 22,
}

console.log(typeof isloggedin);

//------Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "hiteshchoudarydotcom"

let anothername = myYoutubename
anothername ="chaiaurcode"

console.log( myYoutubename);
console.log(anothername);

// here in primitive datatype we copy the values from the stack

let userOne = {
    email: "user#google.com",
    upi: "user@ybl"

}

let userTwo = userOne;

// Here tha data store in heap so the value take the reference from the heap... 