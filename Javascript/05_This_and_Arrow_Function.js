const user = {
  name: "Abdullah",
  price: 299,
  welcome: function () {
    console.log(`${this.name}, welcome in the course`); //this is used as current context.
    console.log(this);
  },
};
// user.welcome();
// user.name = "Ansari";
// user.welcome();

// console.log(this);

function chai() {
  const username = "Abd";
  //   console.log(`Hii , ${this.username}`); //this not work in function.
  console.log(this.username);
}
// chai();

const chaiAurCode = () => {
  const username = "Abd";
  //   console.log(`Hii , ${this.username}`); // this not work in function.
  console.log(this.username);
};
// chaiAurCode()

const addTwoNum = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwoNum(2, 3));

// if () instead of {} then no need to write return in the code.

const addThree = (n1, n2, n3) => n1 + n2 + n3; // try to make sure you are using ().
console.log(addThree(1, 2, 3));

const objfun = (n1, n2) => ({ name: "Abdullah" });
console.log(objfun(2, 3));
