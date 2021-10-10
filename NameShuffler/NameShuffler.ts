// Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str: string): string {
  const reverse = str.split(" ").reverse().join(" ");
  return reverse;
}

console.log(nameShuffler("john McClane")); // "McClane john"

module.exports = nameShuffler;
