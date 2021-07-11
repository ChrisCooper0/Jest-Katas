// Given a random non-negative number, you have to return the digits of this number within an array in reverse order

const digitise = (n) => {
  let arr = n.toString(10).replace(/\D/g, "0").split("").map(Number);
  let revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
};
// console.log(digitise(987654321));
module.exports = digitise;
