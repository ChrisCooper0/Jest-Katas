// Write a function that returns a string in which firstname is swapped with last name.
function nameShuffler(str) {
    var reverse = str.split(" ").reverse().join(" ");
    return reverse;
}
console.log(nameShuffler("john McClane")); // "McClane john"
module.exports = nameShuffler;
