// all about new keyword.
function multiply5(num) {
  //   this.num = num;
  return num * 5;
}
multiply5.power = 2;
// console.log(multiply5(4));
// console.log(multiply5.power);
// console.log(multiply5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};

const chai = new createUser("chai", 24);
const tea = createUser("tea", 230);
// console.log(chai);
// chai.printMe();

// all about prototype
let myName = "Abdullah          ";
console.log(myName.truelength); //we are creating a method which will give true length of a string.

let myHero = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spider Power is ${this.spiderman}`);
  },
};

Object.prototype.abdullah = function () {
  console.log(`Hello Abdullah`);
};
// console.log(heroPower.getSpiderPower());

// heroPower.abdullah();
// myHero.abdullah();

Array.prototype.heyAbdullah = function () {
  console.log("Hey Abdullah!");
};

// myHero.heyAbdullah(); // myhero is an array which is why it can access heyabdullah function.
// heroPower.heroPower(); // myhero is an object which is why it cannot access heyabdullah function.

// inheritance

const user = {
  name: "chai",
  email: "chai@google.com",
};
const teacher = {
  makevideo: false,
};
const teachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignments: "JS Assignment",
  fulltime: true,
  __proto__: teachingSupport, // TAsupport can access properties of teachingSupport.
};
teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher);

// Actual task
const anotherName = "Chai aur Code";

String.prototype.truelength = function () {
  // console.log(this);
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
};
anotherName.truelength();
myName.truelength();
"Abdullah Ansari".truelength();
