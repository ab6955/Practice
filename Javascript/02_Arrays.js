const heroes = ["a", "b", "c"];
// console.log(heroes);
// console.log(heroes[2]);

const newHeroes = new Array(6, 5, 4, 3, 2, 1, 0);
// console.log(newHeroes[4]);

// Arrays Method

const myArray = [1, 2, 3];
// myArray.push(10);
// myArray.push(11);
// myArray.push(12);
// myArray.push(13);
// console.log(myArray);

// myArray.pop();
// myArray.pop();
// myArray.pop();
// myArray.pop();
// myArray.pop();
// console.log(myArray);

// myArray.unshift(34)
// myArray.unshift(44)
// myArray.unshift(54)
// myArray.unshift(64)
// myArray.unshift(74)
// console.log(myArray);

// myArray.shift()
// myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(3));
// console.log(myArray.indexOf(1));

const newArr = myArray.join(); // join convert the array to string.
// console.log(myArray);
// console.log(typeof myArray);
// console.log(newArr);
// console.log(typeof newArr);

// slice (not manipulate the original array)and  splice(YES! manipulate the original array)

// Array Advance

const marvelHeroes = ["Captain", "IronMan", "AntMan"];
const dcHeroes = ["BatMan", "Flash"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
// console.log(marvelHeroes[3]);
// console.log(marvelHeroes[3][1]);

marvelHeroes.concat(dcHeroes); // concat combine two array and give result in NEW Array.(unlike push)
const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

const allNewHeroes = [...marvelHeroes, ...dcHeroes]; // spread operator(easy + imp)
// console.log(allNewHeroes);

const anotherArr = [1, 2, 3, 4, [5, 6, [7, 8]], 9];
const realAnotherArray = anotherArr.flat(1);
// console.log(realAnotherArray);

// console.log(Array.isArray(function () {}));

// console.log(Array.from("Abdullah"));

const maths = 90;
const physics = 80;
const chem = 60;
console.log(Array.of(maths,physics,chem));

// console.log(Array.from("123"));
const set = new Set(["Abdullah", "Ansari", "Ahmed"]);
// console.log(Array.from(set));

console.log(Array.of(200, "300", "400"));