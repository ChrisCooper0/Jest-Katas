const { expect } = require("@jest/globals");
const replaceDots = require("./ReplaceDots.js");

test("replaces all dots with dashes", () => {
  expect(replaceDots("T..es..t")).toBe("T--es--t");
});
