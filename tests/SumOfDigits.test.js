const sum = require("../SumOfDigits.js");

test("returns sum and calculation of digits (string or number)", () => {
  expect(sum("12345")).toBe("1 + 2 + 3 + 4 + 5 = 15");
});

test("returns an empty string if no parameter(s) are passed to the function", () => {
  expect(sum()).toBe("");
});

test("returns 'digit = digit' if only one parameter is passed to the function", () => {
  expect(sum(8)).toMatch("8 = 8");
});
