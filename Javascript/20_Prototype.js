function multiply5(num) {
  //   this.num = num;
  return num * 5;
}
multiply5.power = 2;
console.log(multiply5(4));
console.log(multiply5.power);
console.log(multiply5.prototype);

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
chai.printMe();
