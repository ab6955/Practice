// if
const score = 200;
if (score > 100) {
  const power = "fly";
  //   console.log(`User power: ${power}`);
}

// if else if
if (score < 10) {
  console.log(`less than 10`);
} else if (score < 20) {
  console.log(`less than 20`);
} else {
  //   console.log(`Greater than 100`);
}

// Logical operator.
const isLoggedIn = true;
const debitCard = false;
const isLoggedInFromGoogle = true;
const isLoggedInFromEmail = false;
if (isLoggedIn && debitCard) {
  console.log(`You are Allowed in the Course`);
} else {
  console.log(`You are not allowed in the course`);
}

if (isLoggedInFromGoogle || isLoggedInFromEmail) {
  console.log(`WELCOME IN THE COURSE`);
}

// switch
// const month=6
const month = "Jan";

switch (month) {
  case 1:
    console.log(`January`);
    break;
  case "Jan":
    console.log(`FEb`);
    break;
  case 3:
    console.log(`March`);
    break;
  case 4:
    console.log(`April`);
    break;
  case 5:
    console.log(`May`);
    break;
  case 6:
    console.log(`June`);
    break;

  default:
    console.log(`Not allowed`);
    break;
}

// truthy and falsy value
const userEmail = "";
if (userEmail) {
  console.log(`Got userEmail`);
} else {
  console.log(`Didn't get userEmail`);
}

// Falsy Values
// false , 0 ,-0 , BigInt 0n , "" , null , undefined , NaN

// Truthy values
// true, "0", "false", " ", [], {}, function () {};

// how to check if arrays are empty?
const myArray = [];
if (myArray.length === 0) {
  console.log(`Array is Empty`);
}

// how to check if objects are Empty?
const myObject = {};
// const myObject = { name: "Abdullah" };
if (Object.keys(myObject).length === 0) {
  console.log(`Object is Empty`);
} else {
  console.log(`NOT EMPTY`);
}

// nullish coalescing opearotr (??) : null undefined
let val1 = 23;
val1 = 33 ?? 34;
// val1 = null ?? 3223;
val1 = undefined ?? 123;
val1;
console.log(val1);

// Ternary Operator
const price = 100;
price > 200 ? console.log(`Greater than 200`) : console.log("Less than 200");
