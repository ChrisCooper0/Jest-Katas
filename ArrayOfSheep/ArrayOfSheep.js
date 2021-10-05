// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example;
var arrayOfSheep = [
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
];
// // Best practice
// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.filter(Boolean).length;
// }
// For loop example
function countSheeps(arrayOfSheep) {
    var count = 0;
    for (var i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count++;
        }
    }
    return count;
}
// console.log(countSheeps(arrayOfSheep)); // 17
module.exports = countSheeps;
