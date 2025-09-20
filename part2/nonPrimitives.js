// **********Reference (Non Primitive)*************
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

const username = {
    "first name":"hitesh",
    isLoggedin: true,
    lastname: "kumar" 

};//if we try to change the username directly we can't

username.firstname = "Ashish"
console.log(username["first name"]);// by this way we use this..
console.log(username.lastname)
console.log(typeof username);

// Here tha data store in heap so the value take the reference from the heap... 

//******* Array*********
 
let anotheruser = ["Ashish", true];// fist value alway be string..

console.log(anotherUser[0]);
