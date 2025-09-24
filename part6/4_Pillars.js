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


/* class Person{
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
engobj.work(); */

// Encapsulation-------->>

class BankAccount{
    #balance = 0; // # is use to hide the data access by explicitly.
    // add money
    deposite(amount){
        this.#balance += amount;// we can access the balance directly only inside the class.
        return this.#balance;
    }
    // view money
    getBalance(){
        return `$ ${this.#balance}` // it return the balance.
    }
}

let account = new BankAccount()
//console.log(account.deposite(250));
//console.log(account.balance);// it give undefined because we can't access balance outside the class..
//console.log(account.getBalance())// for acces the balance we use the method "getBalance".
//console.log(account.deposite());// NaN

// we only use method to access the data or to modify the data...

// ***** Abstraction ******:

class CoffeMachine{
    start(){
        return`starting the machine`
    }

    brewCoffe(){
        return`Brewing coffee`
    }
    
    pressStartButton(){
        let msgOne = this.start();      // we need to store this in a variable before call..
        let msgtwo = this.brewCoffe();
        return `${msgOne} + ${msgtwo}`;
    }

} 

let myMachine = new CoffeMachine();
//console.log(myMachine.start());
//console.log(myMachine.brewCoffe());

//we can print both output by one method..
//console.log(myMachine.pressStartButton());


//***** Polymorphism ******
class Bird{
    fly(){
        return `flying...`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguin can't fly..`
    }
}

let bird = new Bird()
let penguin = new Penguin()
//console.log(penguin.fly());
//console.log(bird.fly());

// Ek hi method "fly()" lekin alag alag object k liye alag behavior..


// **** Static Method *****:

class Calculator{
      static add(a, b){
        return a+b;
    }
}

//let minicalc = new Calculator()
//console.log(minicalc.add(2, 5));// minicalc.add() is not a function so it give error..

console.log(Calculator.add(2, 5)); //static method is directly called by it's class.

// *****Getters and Setters:

class Employee{
    constructor(name, salary){
        this.name = name;
        this._salary = salary;
    }

    get salary(){
        return `You are not allowed to see salary`
    }

    set salary(value){
        if(value < 0){
            console.error("Invalid Salary")
        }else{
            this._salary =value;
        }
    }
}

let emp = new Employee("Ashish", 60000)
console.log(emp.salary);

