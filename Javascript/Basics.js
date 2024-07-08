const name = "Abdullah";
let rollno = 45;
let emailId = "ansariabd62@gmail.com";
let state = "mumbai";
let city;

console.log(name);
console.log(rollno);
console.log(emailId);
console.log(state);
console.log(city);

console.log(name, rollno, emailId, state, city);
console.table([name, rollno, emailId, state, city]);

const firstName = "Ansari";
let div = 2;
let collegeId = "vu8d22";
let isStudent = true;

console.log(typeof firstName);
console.log(typeof div);
console.log(typeof collegeId);
console.log(typeof isStudent);

("use strict");

console.log(typeof null);

let score = "33abc";
console.log(score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);

let isLogedIn = undefined;
let booleanNumber = Boolean(isLogedIn);
console.log(booleanNumber);

console.log(3 ** 2);

let str1 = "Abdullah";
let str2 = " Ansari";
let str3 = str1 + str2;

console.log(str3);

let x = 2;
let y = x++;
console.log(`Y:${y} and X:${x}`);

let a = 4;
let b = ++a;
console.log(`b:${b} and a:${a}`);

let name1 = "Abdullah";
let name2 = name1;
// name1="Ansari"
name2 = "ansari";
console.log(name1);
console.log(name2);

// symbol data type

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// Array

const heros = ["Mohammad", "abubakr", "Umar", "Usman"];

const myobject = {
  name: "Abdullah",
  age: 12,
};

const myfunction = function () {
  console.log("Hello World");
};

console.log(typeof x);

// Stack and Heap.
/* 
Stack => Primitive data types
Heap => Non-primitive(reference) data types */

let userOne = {
  name: "Abdullah",
  age: 12,
};
let userTwo = userOne;

userTwo.name = "Ansari";

console.log(userOne.name);
console.log(userTwo.name);

// String

let newName = "abdullah";
let age = 20;
console.log(newName + " " + age); not recommended

console.log(`My name is ${newName} and age is ${age}`);

const newName2 = new String("abdansari");

console.log(newName2);
console.log(typeof newName2);
console.log(newName2.toUpperCase());
console.log(newName2.toLowerCase());
console.log(newName2.charAt(2));
console.log(newName2.indexOf("b"));

const nayaName = "Abdullah_ansari";
console.log(nayaName.substring(2, 4));
console.log(nayaName);
console.log(nayaName.split("_"));
console.log(nayaName.slice(2, 4));

const naame2 = "Abdullah ansari 1234";
console.log(naame2.split(" "));
console.log(naame2.split(" ",'2'));

const dogName = "Your dog is not same as his dog!";
console.log(dogName.indexOf("dog",2));
console.log(dogName.replace("his","her"))
console.log(dogName.slice(-15, -1));
console.log(dogName.toUpperCase());
console.log(dogName.toLowerCase());
console.log(dogName.startsWith("y"));
console.log(dogName.endsWith("!"));

// Numbers

const score12 = 334;
console.log(score12);

const balance = new Number(2334.2343);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toPrecision(5));

const number = 200000;
// const newNumber = number.toLocaleString();
const newNumber = number.toLocaleString("en-IN");
console.log(newNumber);

// Maths
console.log(Math.abs(-3));
console.log(Math.round(5.6));
console.log(Math.ceil(5.1));
console.log(Math.floor(6.6));
console.log(Math.sqrt(5));
console.log(Math.min(4, 6, 65, 34, 23));
console.log(Math.max(4, 6, 65, 34, 23));

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max - min+1) + min));

// Date

let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toTimeString());
console.log(typeof mydate);

let myOwnDate = new Date(2024, 0, 24);
console.log(myOwnDate.toDateString());

let myOwnDate2 = new Date(2024, 0, 24, 4, 2, 3);
console.log(myOwnDate2.toLocaleDateString);
console.log(myOwnDate2.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myOwnDate.getTime());
console.log(myOwnDate.getDate());

// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.toString());
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours() + 1);
console.log(newDate.getMinutes());
console.log(newDate.getMilliseconds());
console.log(newDate.getSeconds());

console.log(
  `Today the date is ${newDate.getDate()} , the month is ${newDate.getMonth()}, hours are ${newDate.getHours()} , the minutes are ${newDate.getMinutes()} and the seconds are ${newDate.getSeconds()}`
);
