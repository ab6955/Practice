// Immediately Involked Function Expression (function declaration) (function execution)

(function chai() {
    // named IIFE.
  console.log(`DB Connected`);
})();

(() => {
  console.log(`DB Connected 2`);
})();

((username) => {
  console.log(`Hello ${username}`);
})("Abdullah");
