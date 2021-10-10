// It involves implementing a program that sums the digits of a non-negative integer. For example, the sum of 3433 digits is 13.
// Digits can be a number or a string, and you should control it is no undefined and return an empty string.
// Digits can be a number or a string, and you should ensure it is not None and return an empty string.
// To give you a little more excitement, the program will not only write the result of the sum, but also write all the sums used: 3 + 4 + 3 + 3 = 13.
function sum(digits) {
    if (typeof digits == "number") {
        digits = JSON.stringify(digits);
    }
    if (digits === undefined) {
        return "";
    }
    if (digits.length <= 1) {
        return digits + " = " + digits;
    }
    var sum = 0;
    var calc = "";
    var firstVal = digits.slice(0, 1);
    var remainingVal = digits.slice(1);
    for (var i = 0; i < remainingVal.length; i++) {
        if (remainingVal.length <= 1) {
            calc += "" + remainingVal[i];
            sum += parseInt(remainingVal[i]);
        }
        else {
            sum += parseInt(remainingVal[i]);
            calc += " + " + remainingVal[i];
        }
    }
    sum += parseInt(firstVal);
    return "" + firstVal + calc + " = " + sum;
}
console.log(sum("12345")); // 1 + 2 + 3 + 4 + 5 = 15
console.log(sum(1)); // 1 = 1
console.log(sum(12345)); // 1 + 2 + 3 + 4 + 5 = 15
console.log(sum()); // Empty string
module.exports = sum;
