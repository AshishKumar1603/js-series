// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2!=1);
// console.log(2==1);

// console.log("2">1)// js converted string to number ( value conversion)
// console.log("02">1)

// //***** Avoid this type of comparision******

// console.log(null>0); //false -- value conversion problem 
// console.log(null==0);// false  
// console.log(null>=0); // true because comparision coverted null to be a number, treating is as 0.


console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined==null); //ye special case hai dono hamesha equal hote hai(loose equality==)
//loose equality means before compareing the values js 
//convert the data type of values in common type(Type Conversion/Type Coercion)..

//***** strict check*******

// console.log("2"=== 2);// false because there datatype are not same
// console.log("2" == 2);// true 
