function SetUsername(username){
    this.username = username;
    console.log("called");

}

function createUser(username, email, password){
    SetUsername.call(this, username)// here we use .call keyword to call the parameter of another function..
    this.email = email;
    this.password= password;
}
const obj = new createUser("Ashish", "abc2gmail.com", "123")
console.log(obj);
 
// in window if use this keyword it return window function:
// but in node it return {} empty parenthesis.. 