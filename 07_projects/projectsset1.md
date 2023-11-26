# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1
```javascript
console.log("sahil")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } 
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2 solution

```javascript
const form = document.querySelector('form')
//this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)
//Dont write here because when page will load it will get values not on submit button clicking


form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  
  if(height === '' || height < 0 || isNaN(height)){ // avoid using height!=NaN
    results.innerHTML = `Please give a valid height ${height}`
  }else if(weight === '' || weight < 0 || isNaN(weight)){ // avoid using height!=NaN
    results.innerHTML = `Please give a valid weight ${weight}`
  } else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2) //upto 2 decimal value
    // show the result
    let msg = ''
    if(bmi<18.6){
      msg = "You are underweight"
    }
    else if(bmi>24.9) msg = "You are overweight"
    else msg = "You are healthy... Enjoy your life!"
    results.innerHTML = `<span>${bmi}</span><br><p>${msg}</p>`
  }
})
```

## Project 3 solution
```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// very important function, an important question in many interviews
setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
},1000) //1000 millisecond
```

## Project 4 solution
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

// sometimes input tag is also used as button in HTML

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;
let guess = -1;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // i think, it is for keeping things in frontend
    guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// console.log(guess) // it is called when page is loaded and above console.log when button is clicked
// console.log("2 " +  guessSlot.innerHTML)
// console.log("3 " +  remaining.innerHTML)

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');
  } else if (guess > 100) {
    alert('Please Enter a number less than or equal 100');
  } else if (guess < 1) {
    alert('Please enter a number more than or equal to 1');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`number is too low!`);
  } else if (guess > randomNumber) displayMessage(`numbe id too high!`);
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(guess) {
  userInput.val = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(guess) {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = 10;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```

## Project 4 solution
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

// sometimes input tag is also used as button in HTML

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;
let guess = -1;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // i think, it is for keeping things in frontend
    guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// console.log(guess) // it is called when page is loaded and above console.log when button is clicked
// console.log("2 " +  guessSlot.innerHTML)
// console.log("3 " +  remaining.innerHTML)

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');
  } else if (guess > 100) {
    alert('Please Enter a number less than or equal 100');
  } else if (guess < 1) {
    alert('Please enter a number more than or equal to 1');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`number is too low!`);
  } else if (guess > randomNumber) displayMessage(`numbe id too high!`);
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(guess) {
  userInput.val = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(guess) {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = 10;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```

## Project - 5 solution

```javascript
console.log('Project 5');

const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
  insert.innerHTML = 
  `
  <table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Key Name</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  `
})
```


## Project - 6 solution
```javascript
const body = document.body;
const start = document.getElementById('start');
const stop = document.getElementById('stop');
console.log(body.style.backgroundColor);

function randomNumber() {
  let min = 0;
  let max = 255;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let func;
start.addEventListener('click', (e) => {
  if(!func){
  func = setInterval(() => {
    let r = randomNumber();
    let g = randomNumber();
    let b = randomNumber();
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }, 1000);
  }
});

stop.addEventListener('click', () => {
  clearInterval(func);
  func = null
});

```