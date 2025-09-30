# Project related to DOM

## Project Link
[click](https://stackblitz.com/edit/vitejs-vite-ydwnyeel?file=5_textEditor%2Fscript.js)

# Solution code(JavaScript)

## Project 1

```javascript
console.log("Ashish")
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener("click", function(event){
    console.log(event);
    console.log(event.target);
    switch(event.target.id){
      case "grey":
         body.style.backgroundColor = "grey";
      break;

      case "blue":
        body.style.backgroundColor = "blue";
        break;

      case "green":
        body.style.backgroundColor = "green";  
        break;

      case "yellow":
        body.style.backgroundColor = "yellow";  
        break;

      default:
        document.body.style.backgroundColor = "white";

      console.log("unknown color button clicked")
    }


   /*  if(event.target.id==="grey"){
      body.style.backgroundColor = event.target.id;
    }
      else if(event.target.id==="blue"){
        body.style.backgroundColor = event.target.id;
      }
      else if(event.target.id==="green"){
        body.style.backgroundColor = event.target.id;
      }
      else if(event.target.id==="yellow"){
        body.style.backgroundColor = event.target.id;
      } */
  })
  
})
```

## Project 2

```javascript
 const form = document.querySelector("form")
 // this usecase will give you empty
 //const height = parseInt(document.querySelector("#height"))


 form.addEventListener("submit", function(event){
   event.preventDefault()
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results")

if (height === "" || height < 0 || isNaN(height)){
   results.innerHTML = `Please give the valid height ${height}`;
}

else if (weight === "" || weight < 0 || isNaN(weight)){
   results.innerHTML = `Please give the valid weight ${weight}`
}
else{
   bmi = (weight/((height*height)/10000).toFixed(2))

  results.innerHTML = `<span>${bmi}</span>`;
}

if( bmi < 18.6 ){
  results.innerHTML = results.innerHTML + "-Under Weight";
}
else if(bmi >=18.6 && bmi <= 24.9){
  results.innerHTML = results.innerHTML + "-Normal Weight";
}
else{
 results.innerHTML = results.innerHTML + "-Over Weight"
}

 })

```

## Project 3

```javascript
 const clock = document.getElementById("clock")


 setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();

 },1000);
 
```

## Project 4

```javascript
let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const StartOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
  submit.addEventListener("click", function(event){
   event.preventDefault();
   const guess = parseInt(userInput.value)
   console.log(guess)
   validtaeGuess(guess)
  })
    
  }

function validtaeGuess(guess){
  if(isNaN(guess)){
    alert(`Please give the valid number`)
  }
  else if(guess < 1){
    alert(`please enter the number more than 1`)
  }
  else if(guess > 100){
    alert(`Please enter the number less than 100`)
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
     displayGuess(guess)
     displayMessage(`Gam over. Random number was ${randomNumber}`)
     endGame()
    }else{
       displayGuess(guess)
       checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`you guessed rigth`)
    endGame()
  }else if(guess < randomNumber){
    displayMessage(`number is too low`)
  }else if(guess > randomNumber){
    displayMessage(`number is to big`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess},  `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML =`<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML =`<h2 id="newGame">Start new Game</h2>`;
  StartOver.appendChild(p);
  playGame = false;
  newGame();

}

function newGame(){
  const newGamebutton = document.querySelector("#newGame");
  newGamebutton.addEventListener("click", function(){
    randomNumber = parseInt(Math.random()*100+1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    userInput.removeChild(p);
    playGame = true;
  })
}

```

## Project 5

```javascript

let input = document.getElementById("input-field");
let output = document.getElementById("output-field");

// UPPERCASE
document.querySelector(".uppercase").onclick = function () {
  output.innerText = input.value.toUpperCase();
};

// lowercase
document.querySelector(".lowercase").onclick = function () {
  output.innerText = input.value.toLowerCase();
};

// Capitalize (sirf pehle letter bada)
document.querySelector(".capitalize").onclick = function () {
  let text = input.value;
  output.innerText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

// Bold
document.querySelector(".bold").onclick = function () {
  output.innerHTML = "<b>" + input.value + "</b>";
};

// Italic
document.querySelector(".italic").onclick = function () {
  output.innerHTML = "<i>" + input.value + "</i>";
};

// Underline
document.querySelector(".underline").onclick = function () {
  output.innerHTML = "<u>" + input.value + "</u>";
};

```