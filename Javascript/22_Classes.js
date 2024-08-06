// ES6

/*
class user {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abcd`;
  }
  changeUsername() {
    this.username = this.username.toUpperCase();
    return this.username;
    // or u can below code.
    // return `${this.username.toUpperCase()}`;
  }
}
const chai = new user("Abdullah", "abdullah@gmail.com", "123");
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());
*/

// behind the scene
// lets use class using function

/*
function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encryptPassword = function () {
  return `${this.password}abcd`;
};
user.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new user("Ansari", "ansari@gmail.com", "456");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
 */

// inheritance
class user {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class teacher extends user {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new Course is added by ${this.username}`);
  }
}

const chai3 = new teacher("Abd", "das@google.com", "12342");
const masalaChai = new user("masalaChai");
// console.log(chai3.addCourse());
// console.log(chai3.logMe());
// console.log(masalaChai.logMe());
// console.log(masalaChai.addCourse()); // child can access parent but not vice versa.

// console.log(chai3 instanceof teacher);
// console.log(masalaChai instanceof user);

// Stactic Properties(props)
class user3 {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
  static createId() {
    // here static will not allow anyone to use createId function.
    return `123`;
  }
}
const Abdullah = new user3("Abdullah");
// console.log(Abdullah.createId());

class teacher4 extends user3 {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new teacher4("iphone", "iphone@iphone.co");
iphone.logMe();
// console.log(iphone.createId());
