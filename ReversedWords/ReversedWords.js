// Original solution
function reverseWords(str) {
    var arr = str.split(" ");
    var reversedStr = "";
    for (var i = arr.length - 1; i >= 0; i--) {
        reversedStr += arr[i] += " ";
    }
    return reversedStr;
}
module.exports = reverseWords;
// Alternative solution with built in methods
var reverseString = function (str) {
    return str.split(" ").reverse().join(" ");
};
module.exports = reverseString;
