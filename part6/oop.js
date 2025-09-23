/* ## oops

## object 
-> collection of properties and method


## why use OOP
-->We use OOP in JavaScript because:

1.It organizes code into logical structures.

2.Reduces duplication through inheritance.

3.Makes projects scalable and maintainable.

4.Provides data security with encapsulation.

5.Helps us model real-world entities easily.

6.Encourages flexible code with polymorphism and abstraction. */



//******** Understanding of oops***********:

//ProtoType in js

/* prototype means taking reference of any object in another object (using function of that object)

--> we can set prototype using __proto__*/

//taking example: 

const employee = { // employee object..
cacltax(){
    //console.log("tax rate is 10%");// calctak ye function hai jo employee object k liye invoke ho jayega..    

},
};
const KaranArjun = {
    salary : 50000,
    cacltax(){
          //console.log("tax rate is 20%");
          
    },
    
};

KaranArjun.__proto__ = employee;// yha p employee ko prototype banaya hai..

//console.log(KaranArjun.cacltax())

KaranArjun.cacltax(); 
//console.log(KaranArjun.__proto__); // ye check kr rha hai ki prototype shi se set hua hai ki nhi..
// JS pehle check krega KaranArjun me calctax hai kya --> Nahi hai. Tab wo __proto__ me (employee object me) search krega --> Mil gya , aur whi run krega.


//****** Classes in Js ******:

/* class is program-code template for create object.

--> let's create a class:
 */
class ToyotaCar {
    constructor(brand){// constructor special method hai jo class ka object create hote hi automatically run hota hai.
                                                             /* 1.Ye initial setup ke liye use hota hai:
                                                                2.Properties set karna
                                                                3.Initial values dena
                                                                4.Dependencies inject karn   */                                                       
        //console.log("creating my new car");
        this.brand = brand;
    }
    
    
    start(){
        //console.log("start");
    }
    stop(){
        //console.log("stop");
        
    }
   /*  setBrand(brand){
        this.brand = brand;
    } */


}
// ye ek class hai..

// object create krne k liye hum likhte hai " let myobj = new MyClass();"

let fortuner = new ToyotaCar("fortuner");// object create.// constructor
//fortuner.setBrand("fortuner")
//console.log(typeof fortuner); // object
//console.log(fortuner.start()); 

//console.log(fortuner)

//********** __ Inheritence in Js__ ************

/* Inheritence is passing down properties & methods from parent class to child class.

Inheritance ek concept hai jisme ek class ya object dusre class/object ke properties aur methods ko access karta hai.
Ye mainly reusability ke liye hota hai.

Inheritance ka matlab hai “ek cheez dusre se virasat me mile”. */

/* class Parent {
    hello() {
        console.log("hello")
    }
}

class child extends Parent {} // inherit child class from parent.

let obj = new  child();

obj.hello();

//** 2nd Example ** // concept of method overriding exolain here...

class Person{
    constructor(){
        this.species = "homo sapiens"
    }
    eat(){
        console.log("eat")
    }

    sleep(){
        console.log("sleep")
    }

    work(){
        console.log("dp nothing");
    }

}

class Engineer extends Person{
    work(){
        console.log("solve problem, build something");   jb same fuinction/ method parent aur child class dono mai ho tb child class           
                                                        wala function ivoke(call) hota hai, isse hi Method Overriding kahte hai.. 
    }
}

 class Doctor extends Person{
    work(){
        console.log("treat patients");
    }
 }

 let Ashish = new Engineer();
Ashish.work();
let p1 = new Person();
p1

console.log(typeof p1) 
 */
//******  Super Keyword  ********:

/* **Parent Class ka Constructor Call Karna ho.. 

Jab hum ek child class banate hain jo kisi parent class se extends karta hai, to child class ke constructor
 me this ko use karne se pehle hume super() call karna mandatory hota hai.

Ye parent class ke constructor ko call karta hai aur uske properties/methods ko initialize karta hai.
 */


class Person{
    constructor(){
        this.species = "homo sapiens"
    }
    eat(){
        console.log("eat")
    }

}

class Engineer extends Person{
    constructor(branch){
        super(); // to invoke parent class constructor
        this.branch = branch;
    }


    work(){
        super.eat();
        console.log("solve problem, build something"); 
    }
}

 let engobj = new Engineer("information Technology");
console.log(engobj)
engobj.work();



//********* Practice Question ***********:

/* Qs. You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.
 */

let DATA = "Secret Information"

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data =", DATA)
    }
}
let student1 = new User("Ashish", "abc@gmail.com");
let student2 = new User("Janvi", "jan@gmail.com");
console.log(student1)
console.log(student2);

student1.viewData();

/* Qs. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.
 */

//let DATA = "Secret Information"

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data =", DATA)
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email);

    }

    editData(){
         DATA = "some new value"
    }
}

let admin1 = new Admin("admin", "admin@gmail,com")

console.log(admin1)
admin1.editData();


// *** new keyword -----
/* 1. jb bhi hum new keyword use krenge to ek emopty or new object create hota hai jise hum instance bolte hai..
2.  constructor function call hota hai "new" keyword k karan, ye sare argument jo uske ander present hote hai wo isme paas ho n jate hai..
3. this keyword inject isme inject ho jata hai
4. final function mil jata hai..
 */