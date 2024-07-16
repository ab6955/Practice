// for loop

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element === 3) {
    // console.log("3 is best number");
  }
  //   console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`i=${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`j=${j}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

const myArray = ["Flash", "superman", "batman"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //   console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//   if (index == 4) {
//     console.log("4 Detected");
//     break;
//   }
//   console.log(index);
// }

for (let index = 0; index < 10; index++) {
  if (index == 7) {
    // console.log("7 Detected");
    continue;
  }
  //   console.log(index);
}

// while loop

let index = 0;
while (index <= 10) {
  //   console.log(index);
  index = index + 2;
}

const myArr = ["Batman", "superman", "Antman"];
let arr = 0;
while (arr < myArray.length) {
  //   console.log(myArr[arr]);
  arr++;
}

// do while
// let score = 1;
let score = 11;
do {
  console.log(score);
  score++;
} while (score <= 10);
