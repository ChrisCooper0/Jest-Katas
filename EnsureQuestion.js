// Write a function which returns the input (s) with a question mark at the end. If the string already ends with a question mark just return the string

function ensureQuestion(s) {
  return s.slice(-1) === "?" ? s : `${s}?`;
}

console.log(ensureQuestion("Test")); // Test?
console.log(ensureQuestion("Test?")); // Test?

module.exports = ensureQuestion;
