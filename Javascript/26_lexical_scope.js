// Lexical Scope
// Here inner function can access variable of outer function but not vice versa.
// read from mdn, easy hai waha pe.

function outer() {
  let name = "Abdullah";

  function inner() {
    console.log(name);
  }
  inner();
}
outer();
