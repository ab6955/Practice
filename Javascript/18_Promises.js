const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
// then and catch
promiseOne.then(function () {
  console.log("Promise consume");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise 2 done");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Abdullah", email: "ansariabd62@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Abdullah", Password: 123 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log("NO Error");
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log(`The promise is either resolve or rejected`));

// async await
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const Error = true;
    if (!Error) {
      resolve({ username: "Javascript", price: 199 });
    } else {
      reject(`Got some Error`);
    }
  }, 1000);
});

async function consumePromiseFive() {
  // const response = await promiseFive;
  // console.log(response);
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// fetch()
// 1) using asyc await

// async function getAllusers() {
//   try {
//     const response = await fetch("https://api.github.com/users/ab6955");
//     // console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
// }
// getAllusers();

// 2) using then catch
fetch("https://api.github.com/users/ab6955")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
