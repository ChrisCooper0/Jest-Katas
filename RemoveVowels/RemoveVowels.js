// Original solution
// const disemvowel = (str) => {
//   let newStr = "";
//   const vowels = "aeiouAEIOU";
//   for (let i = 0; i < str.length; i++) {
//     if (!vowels.includes(str[i])) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// };
// Refactored solution
var disemvowel = function (str) {
    return str.replace(/[aeiou]/gi, "");
};
module.exports = disemvowel;
