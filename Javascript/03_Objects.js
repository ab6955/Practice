// singleton
// Object.create

// Object literals

const JsUser = {
  name: "Abdullah",
  "full name": "Ansari Abdullah",
  age: 20,
  location: "Mumbai",
  email: "ansariabd@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Sunday", "Monday", "Tuesday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);  // you cant use .method(.full name) here.

const mySym = Symbol("key1");
const mySymObj = {
  name: "Abdullah",
  [mySym]: "mykey1", // only way to use symbol inside objects.
};
// console.log(mySymObj.name);
// console.log(mySymObj["name"]);
// console.log(mySymObj[mySym]); // and the only way to get the output from symbol.

JsUser.email = "workingabd@gmail.com";
// console.log(JsUser);

// Object.freeze(JsUser) // no new values!

// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello World");
};
console.log(JsUser);
console.log(JsUser.greeting());

JsUser.greeting2 = function () {
  console.log(`Hello ${this["full name"]}`);
  console.log(`Here is my Email => ${this.email}`);
};
console.log(JsUser);
console.log(JsUser.greeting2());
