// ***********LOOPS***********

/* --> A loops is used for executing a block of statement{-------}repeatedly untill
    a particular condition is satisfied...

--> A loop consist of an initialization statement , a test condition and an increement statement...   

--> but here it consist a keyword , termination condition and body of loop 

--> Condition = we define the condition for the loop to run (i must be less than 5) . if
                the condition is true , the will start over again, ift it is false the loop[ will end..*/


//************** ____For Loop____*******************

for(let i =1; i <= 5; i++ ){
    console.log("Ashish");// it execute 5 time
}
// here, first it initialize the i = 1, then check the condition is i <= 5 or not , if the condition is true
//then it print Ashish , and increemnet i and agian check the condition and this will happen until it satisfy the condition..

//Calculate sum of 1 to 5

 let sum = 0
 for (let i = 0; i <=5; i++) {
      sum = sum + i;
    
 } console.log("sum =", sum)