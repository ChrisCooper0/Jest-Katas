// Write a function called repeatStr which repeats the given string string exactly n times
function repeatStr(n: number, s: string): string {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
}

// Alternative solution
// function repeatStr(n, s) {
//   return s.repeat(n);
// }

module.exports = repeatStr;
