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
const disemvowel = (str: string): string => {
  return str.replace(/[aeiou]/gi, "");
};
module.exports = disemvowel;
