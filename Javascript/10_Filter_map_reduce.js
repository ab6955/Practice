const coding = ["Abdullah", "Ansari"];

const value = coding.forEach((item) => {
  //   console.log(item);
  return item;
});
// console.log(value);
// forEach does not return any value
// Hence we will use "filter".

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const value2 = myNums.filter((item) => item > 2);  // implicit return if not using {}
const value2 = myNums.filter((item) => {
  return item > 2; // explicit return if using {}
});
// console.log(value2);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => {
  //   return bk.genre === "Fiction";
  return bk.genre === "Science";
});
// console.log(userBooks);

userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre == "History");
// console.log(userBooks);

// ******************** map *******************
// Q1) why to use map instead of filter??
// Ans: because filter will return only those value which is true only(i.e it checks true or false only , check condition) while in Map, value can only be manpulated(i.e add, subtract, etc) , example is ahead.

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArr = myArray.map((item) => {
  return item + 1; // here we are returning the added value instead of true/false.
});
// console.log(newArr);

const newArr2 = myArray.map((num) => {
  return num > 5; // you cannot check condition in map
});
// console.log(newArr2);

// ****************** Chaining *******************

const newArr3 = myArray
  .map((item) => {
    return item * 8;
  })
  .map((item) => {
    return item + 2;
  })
  .filter((item) => {
    return item > 40;
  });
// console.log(newArr3);

// *************** reduce *******************
// it is use to add and return final value.(ex shopping cart    )
const mynums = [1, 2, 3, 4];
const myTotal = mynums.reduce(function (accumulator, curvalue) {
  //   console.log(`Accumulator:${accumulator} and CurValue:${curvalue}`);
  return accumulator + curvalue;
}, 0);
// console.log(myTotal);

// console.log("");

const myTotal2 = mynums.reduce((acc, curvalue) => {
  //   console.log(`Accumulator:${acc} and CurValue:${curvalue}`);
  return acc + curvalue;
}, 0);
// console.log(myTotal2);

const cart = [
  {
    course: "Wev Development",
    price: 199,
  },
  {
    course: "Machine Learning",
    price: 299,
  },
  {
    course: "Data Analytics",
    price: 399,
  },
  {
    course: "Data Science",
    price: 499,
  },
];
const totalCartPrice = cart.reduce((accumulator, item) => {
  console.log(`Accumulator:${accumulator} and item.price:${item.price}`);

  return accumulator + item.price;
}, 0);
console.log(totalCartPrice);

// * filter , map and reduce are actually loops
