function noSpace(x) {
  let trimmed = "";
  for (let i = 0; i < x.length; i++) {
    if (!x[i].includes(" ")) {
      trimmed += x[i];
    }
  }
  return trimmed;
}

console.log(noSpace(" aa  bb  cc ")); // "aabbcc"

module.exports = noSpace;
