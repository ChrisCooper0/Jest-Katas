const countPositivesSumNegatives = require("../CountOfPositiveSumOfNegative");

test("counts positive ints, sums negative ints", () => {
  expect(countPositivesSumNegatives([-1, 1, 2, 3, 4, -1, -2, -3, -4])).toEqual([
    4, -11,
  ]);
});
