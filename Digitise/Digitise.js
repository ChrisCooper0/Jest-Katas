// Given a random non-negative number, you have to return the digits of this number within an array in reverse order
var digitise = function (n) {
    var arr = n.toString(10).replace(/\D/g, "0").split("").map(Number);
    var revArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr;
};
// console.log(digitise(987654321));
module.exports = digitise;
