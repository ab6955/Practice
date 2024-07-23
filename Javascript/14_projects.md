# Project on DOM

## Project 1

```javascript
const buttons = document.querySelectorAll(".button");
// console.log(buttons)

const body = document.querySelector("body");

buttons.forEach((button) => {
  // console.log(button)
  button.addEventListener("click", (e) => {
    // console.log(e)
    // console.log(e.target);
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
      case "white":
        body.style.backgroundColor = e.target.id;
      case "blue":
        body.style.backgroundColor = e.target.id;
      case "yellow":
        body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Project 2

```javascript
const form = document.querySelector("form");
// below code is not accurate because it will give u empty value.
// const height = parseInt(document.querySelector('#height'));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid Weight ${weight}`;
  } else {
    // const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    result.innerHTML = `<span>${bmi}</span>`;
  }
  const showResult = document.querySelector("#showResult");
  if (bmi > 24.9) {
    showResult.innerHTML = `You are Overweight`;
  } else if (bmi < 18.6) {
    showResult.innerHTML = `You are Underweight`;
  } else {
    showResult.innerHTML = `You are Normal`;
  }
});
```
