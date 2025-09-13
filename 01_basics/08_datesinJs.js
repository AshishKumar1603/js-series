// Dtaes

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// Create Date

//let myCreatedDate = new Date(2025, 0, 26)
let myCreatedDate = new Date(2025, 0, 26, 5, 3)// we can also add time in it..
//console.log(myCreatedDate); // it show time b ut it isn't clear to understand
//console.log(myCreatedDate.toString());// now it show clear understanding..
console.log(myCreatedDate.toLocaleString());

// TimeStamp-----
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime);// at what time the date is myCreatedDate.getDate.

console.log(Math.floor(Date.now()/1000));// it use to find seconds


