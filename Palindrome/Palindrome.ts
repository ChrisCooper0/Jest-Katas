const isPalindrome = (str: string): boolean => {
  const lowerStr = str.toLowerCase();
  const revStr = lowerStr.split("").reverse().join("");
  return lowerStr === revStr ? true : false;
};

console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("abc")); // false

module.exports = isPalindrome;
