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