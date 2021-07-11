const { expect } = require("@jest/globals");
const digitise = require("../Digitise");

test("convert number to reversed array", () => {
  expect(digitise(12345)).toStrictEqual([5, 4, 3, 2, 1]);
});
