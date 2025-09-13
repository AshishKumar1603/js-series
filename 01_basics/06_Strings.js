 const name = "Hitesh"
 const repoCount = 50

 // console.log(name + repoCount + "Value") this is old way of using so we didn't prefer this..

 console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)//Tactik use krne se yha p aata hai String interpolation so we make a placeholder
                //to insert some values in it..

 const gameName = new String(`Ashish`) 
 // for access key of the String 
 console.log(gameName.charAt(2));// here we check at which place what charachter lie..

 console.log(gameName.indexOf(`s`))// it tell us that position of the character
 
 // dividing the string into substring..

 //const newString = gameName.substring(0, 4) // it give output Ashi from index 0 to 3 it  didn't print index 4 char..
 //console.log(newString);
 
 // giving negative value----

 const anotherString = gameName.slice(-5, 4)// only slice count negitive value in String..
 console.log(anotherString)

 //Removing whitespace----

 const newStringOne = "  Ashish  "
 console.log(newStringOne);
 console.log(newStringOne.trim()) // we use trim for remove the whitespace...

 //Replace char by new char..
 const url = "https://Ashish.com/Ashish%20kumar"
 console.log(url.replace('%20', '-'));

 // Checking that String/url include this String..

 console.log(url.includes(`Ashish`));// it shows true...

