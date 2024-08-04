// objects literals
// here we are discussing about why we cant use litals more.
const user = {
  username: "Abdullah",
  signin: true,

  getUserDetails: function () {
    // console.log("Got user detail");
    // console.log(this.username);
    console.log(this);
  },
};
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, age, isloggedIn) {
  this.username = username;
  this.age = age;
  this.isloggedIn = isloggedIn;

  this.greeting = function () {
    console.log(`Username: ${this.username}`);
  };

  return this;
}
// const userOne = User("Abdullah", 23, true);
// const userTwo = User("Javascript", 29, false);
// console.log(userOne); // userTwo will over userOne

const userOne = new User("Abdullah", 23, true);
const userTwo = new User("Javascript", 29, false);
console.log(userOne);
console.log(userTwo);
console.log(userOne.greeting());

/* what new keyword does?
1) creates a new object.
2) new keyword called a constructer function which will packs all arguments that you have passed.
3) All the arguments that you have passed will inject in 'this'.
4) Got all arguments in function
*/
