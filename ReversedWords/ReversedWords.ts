// Original solution
function reverseWords(str: string): string {
  let arr = str.split(" ");
  let reversedStr = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedStr += arr[i] += " ";
  }
  return reversedStr;
}

module.exports = reverseWords;

// Alternative solution with built in methods
const reverseString = (str: string): string => {
  return str.split(" ").reverse().join(" ");
};
module.exports = reverseString;
