// for of

const myArr = [1, 2, 3, 4, 5];
for (const num of myArr) {
  //   console.log(num);
}

const greeting = "Abdullah Ansari";
for (const greet of greeting) {
  if (greet == " ") {
    continue;
  }
  //   console.log(greet);
}

const map = new Map();
map.set("IN", "INDIA");
map.set("FR", "FRANCE");
map.set("AR", "FRANCE");
map.set("NP", "NEPAL");
map.set("NP", "usa");
// console.log(map);

for (const [key, value] of map) {
  //this syntax is used for printing keys and values in MAP.
  //   console.log(key, "=>", value);
}

const myObj = {
  " name": "Abdullah",
  age: 20,
};
// for (const key of myObj) {
/// Object is NOT iterable in FOROF.
//   console.log(key);
// }

// ******************* forin loop ******************

const myObject = {
  JS: "Javascript",
  py: "Python",
  RB: "Ruby",
};
for (const key in myObject) {
  //   console.log(key); //this will only print KEYS.
  //   console.log(myObject[key]); //this will print only VALUES.
}

const arr = ["js", "rb", "py", "swift"];
for (const key in arr) {
  //   console.log(key);
  //   console.log(arr[key]);
}

// NOTE : 'forof' is mainly used for "ARRAYS" and "MAP" while 'forin' is mainly used for "OBJECT".
//NOTE:  forin in NOT iterable on MAP.

// *************** For Each LOOP  ****************

const coding = ["SuperMan", "BatMan", "IronMan"];

// coding.forEach(function (item) {
coding.forEach((item) => {
  //   console.log(item);
});

// Instead of declaring , we first declare here and then give reference at line 72
function printMe(item) {
  console.log(item);
}
// coding.forEach(printMe); // Note : Only give reference (dont call the function)

coding.forEach((item, index, arrlist) => {
  //   console.log(item, index, arrlist);
});

const myCoding = [
  { LanName: "Javascript", LangCode: "JS" },
  { LanName: "Python", LangCode: "py" },
  { LanName: "Ruby", LangCode: "RB" },
];

myCoding.forEach((item) => {
  console.log(item.LanName);
  console.log(item.LangCode);
});
