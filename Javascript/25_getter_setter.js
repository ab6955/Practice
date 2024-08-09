//1) get set using class
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password}abdullah`;
  }
  set password(value) {
    this._password = value; //here we are set value as same as provided but if someone try to get that value than value will be provided as given by get()
  }
}
const abdullah = new User("ansari1@gmail.com", "abc");
// console.log(abdullah.password);
// console.log(abdullah.email);

//2) Old syntax for get set by defyning properties.
function user(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}
const chai = new user("chai@gmail.com", "chai");
// console.log(chai.email);

//3)using Objects
const user2 = {
  _email: "ab@.ac.in",
  _password: "ayz",

  get() {
    return this._email.toUpperCase();
  },
  set(value) {
    this._email = value;
  },
};
const tea = Object.create(user2);
console.log(tea._email);
