// ***********LOOPS***********

/* --> A loops is used for executing a block of statement{-------}repeatedly untill
    a particular condition is satisfied...

--> A loop consist of an initialization statement , a test condition and an increement statement...   

--> but here it consist a keyword , termination condition and body of loop 

--> Condition = we define the condition for the loop to run (i must be less than 5) . if
                the condition is true , the will start over again, ift it is false the loop[ will end..*/


//************** ____For Loop____*******************

//for(let i =1; i <= 5; i++ ){
    //console.log("Ashish");// it execute 5 time
//}
// here, first it initialize the i = 1, then check the condition is i <= 5 or not , if the condition is true
//then it print Ashish , and increemnet i and agian check the condition and this will happen until it satisfy the condition..

//Calculate sum of 1 to 5

 /* let sum = 0
 //for (let i = 0; i <=5; i++) {
      sum = sum + i;
    
 }  *///console.log("sum =", sum)


 //Scope ***********

 //for(let i = 1; i <= 5; i++){
    //console.log("i =", i)
 //} 
 //console.log(i);// it show error because we didn't declare i here , we use let so it only access block scope
                // it run only inside the block....

  //for(var i = 1; i <= 5; i++){
    //console.log("i =", i)
 // }              
  //console.log(i) // here we use var it acces globaly it first run i in the loop or inside the block after the termination i exist globaly so it print the end value 6..


//************-------- WHILE LOOP------- ****************
 

/* let i = 1;
while (i <= 5) {
    console.log("i =", i)
    i++;
} */
 // Here we check the condition first ...

//************------ DO WHILE ------************

/* let i = 20;
do{

   console.log("Ashish");// here we use semi colon..
   i++;

}while (i <= 10) */

//*************  for-of loop  *************    

//it help us to put loop on string and array 

/* let str = "Ashish";

for(let i of str){
    console.log("i =", i)// iterator -> character
} */

//************* for-in loop **************

/* let student = {
    name :"Ashish",
    age : 22,
    cgpa : 7.5,
    isPass : true
};
for(let key in student){
    console.log("key =", key, "value =", student[key])
}
 */

//**************** Practice Question ******************

//print even number b/w 0 to 100

/* for(let num =0; num <=100; num++){
    if(num%2 == 0){
console.log(num)
    }
} */
//console.log(num)

let gameNum = 15;
let userNum = prompt("Guess the game number")

while(userNum != gameNum){

   userNum = prompt("You entered the wrong number, Guess again");// it is not run directly in vs code because prompt is browser function.
}
console.log("Congratulations, you entered the right number")