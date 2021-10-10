// Write a function called repeatStr which repeats the given string string exactly n times
function repeatStr(n, s) {
    var str = "";
    for (var i = 0; i < n; i++) {
        str += s;
    }
    return str;
}
// Alternative solution
// function repeatStr(n, s) {
//   return s.repeat(n);
// }
module.exports = repeatStr;
