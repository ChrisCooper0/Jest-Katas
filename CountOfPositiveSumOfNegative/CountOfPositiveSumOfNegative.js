// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] you should return [10, -65].
function countPositivesSumNegatives(input) {
    var positiveCount = 0;
    var negativeSum = 0;
    var array = [];
    if (input == null || input.length < 1) {
        return [];
    }
    for (var i = 0; i < input.length; i++) {
        if (Math.sign(input[i]) >= 1) {
            positiveCount++;
        }
        else if (Math.sign(input[i]) === -1) {
            negativeSum += input[i];
        }
    }
    array.push(positiveCount, negativeSum);
    return array;
}
console.log(countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
])); // [10, -65]
module.exports = countPositivesSumNegatives;
