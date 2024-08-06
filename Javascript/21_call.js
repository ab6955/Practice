function setUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUsername.call(this, username); // here call is passing createUser's this to hold setusername's reference.
  this.email = email;
  this.password = password;
}

const chai = new createUser("Abdullah", "ansariabd6@gmail.com", "123");
console.log(chai);
