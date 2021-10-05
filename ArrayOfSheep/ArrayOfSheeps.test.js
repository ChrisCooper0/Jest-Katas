const countSheeps = require("./ArrayOfSheep.js");

const arrayOfSheep = [
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

test("returns number of true values in array", () => {
  expect(countSheeps(arrayOfSheep)).toBe(17);
});
