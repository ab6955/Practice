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
console.log(loginInfo);

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
console.log(userAvailability());