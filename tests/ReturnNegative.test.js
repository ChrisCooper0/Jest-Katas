const makeNegative = require("../ReturnNegative");

test("returns negative of number", () => {
  expect(makeNegative(3)).toBe(-3);
});

test("returns negative of number", () => {
  expect(makeNegative(0)).toBe(0);
});

test("returns negative of number", () => {
  expect(makeNegative(-5)).toBe(-5);
});
