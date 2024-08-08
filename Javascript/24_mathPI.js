// console.log(Math.PI);
// console.log(Math.LOG2E);

// const descriptor = Object.getOwnPropertyDescriptor(Math, "LOG2E");
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("Nhi bani chai");
  },
};

// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: true,
});
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}
