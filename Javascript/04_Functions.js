function sayMyName() {
  console.log("A");
  console.log("B");
  console.log("D");
  console.log("U");
  console.log("L");
  console.log("L");
  console.log("A");
  console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2) {
  // number1,number2 are called parameters here.
  console.log(number1 + number2);
}
// addTwoNumbers(1, 2); // 1 and 2 are arguments here.

function addThreeNumber(n1, n2, n3) {
  return n1 + n2 + n3;
}
const result = addThreeNumber(1, 2, 3);
// console.log(result);

function userLoggedIn(username) {
  return `${username} just loggged in`;
}
const loginInfo = userLoggedIn("Abdullah");
// console.log(loginInfo);

function userAvailability(username = "ansari") {
  // here ansari will act as defalt value in case username not provided.

  // if (username === undefined)  // this and below are exactly same.
  if (!username) {
    console.log(`Please Enter your username`);
    return;
  }
  return `${username} is available`;
}
// console.log(userAvailability("Abdullah"));
// console.log(userAvailability());

// passing multiple arguments.
function calculateCartPrice(...n1) {
  // here ...(rest) operator also known as spread is used.
  return n1;
}

// console.log(calculateCartPrice(100,200,300));

// Object in function

const user = {
  username: "Abdullah",
  price: 199,
};

function ObjectHandling(someObject) {
  console.log(
    `username is ${someObject.username} and price is ${someObject.price}`
  );
}
// ObjectHandling(user)

// ObjectHandling({
//   // this is another way  in which we directy pass object as a argument in function.
//   username: "Ansari",
//   price: 399,
// });

// Array in function

const myArray = [100, 200, 300, 400];

function ArrayHandling(someArray) {
  return someArray[2]; // returning 3rd value of array
}
// console.log(ArrayHandling(myArray));
// console.log(ArrayHandling([100, 200, 300, 400])); // similarly we are passing array directly as a argument.

// Nested function(scope)

function bigBrother() {
  const nameOfBigBrother = "Abdullah";

  function smallBrother() {
    const nameOfSmallBrother = "Essa";
    console.log(nameOfBigBrother);
  }
  // console.log(nameOfSmallBrother);
  smallBrother();
}
// bigBrother();

// if (true) {
//   const username = "Ansari ";
//   if (true) {
//     const website = "youtube";
//     console.log(username + website);
//   }
//   // console.log(website);
// }
// console.log(username);

// Hoisting (declaration of function)

console.log(addByOne(3));
function addByOne(number) {
  return number + 1;
}

const addByTwo = function (number) {
  return number + 2;
};
console.log(addByTwo(3));
