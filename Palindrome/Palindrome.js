var isPalindrome = function (str) {
    var lowerStr = str.toLowerCase();
    var revStr = lowerStr.split("").reverse().join("");
    return lowerStr === revStr ? true : false;
};
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("abc")); // false
module.exports = isPalindrome;
