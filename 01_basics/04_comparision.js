// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2!=1);
// console.log(2==1);

console.log("2">1)// js converted string to number ( value conversion)
console.log("02">1)

// //***** Avoid this type of comparision******

console.log(null>0); //false -- value conversion problem 
console.log(null==0);// false  
console.log(null>=0); // truse because comparision coverted null to be a number, treating is as 0.


console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined==null);

//***** strict check*******

console.log("2"=== 2);// false because there datatype are not same
console.log("2" == 2);// true 
