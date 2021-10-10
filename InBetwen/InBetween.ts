function between(a: number, b: number): number[] {
  let array = [];
  for (let i = a; i <= b; i++) {
    array.push(i);
  }
  return array;
}

// console.log(between(1, 6));

module.exports = between;
