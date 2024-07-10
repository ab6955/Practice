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
// console.log(JsUser);
// console.log(JsUser.greeting());

JsUser.greeting2 = function () {
  console.log(`Hello ${this["full name"]}`);
  console.log(`Here is my Email => ${this.email}`);
};
// console.log(JsUser);
// console.log(JsUser.greeting2());

const tinderUser = new Object(); //this is singleton object
const tinderUser2 = new Object(); //this is literals object

// console.log(tinderUser2);
// console.log(tinderUser);

tinderUser.name = "Abd";
tinderUser.id = "123abc";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "abcd@gmail.com",
  username: {
    fullname: {
      firstname: "Abdullah",
      lastname: "ansari",
    },
  },
};
// console.log(regularUser);
// console.log(regularUser.email);
// console.log(regularUser.username.fullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj4 = Object.assign({}, obj1, obj2, obj3);  // a methos used for adding 2 or more objects into 1.

const obj4 = { ...obj1, ...obj2, ...obj3 }; //Our fav spread opeator.
// console.log(obj4);

// we can extract keys and values from objects.
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // a method to extract keys and arrange them in array.
console.log(Object.values(tinderUser)); //  a method to extract values and arrange them in array.
console.log(Object.entries(tinderUser)); // a method which bind key and value in single array | first value is key and second value is value

console.log(tinderUser.hasOwnProperty("name"));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));