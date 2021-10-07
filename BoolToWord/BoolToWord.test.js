const { expect } = require("@jest/globals");
const boolToWord = require("./BoolToWord");

test("converts boolean to Yes if true or No if false", () => {
  expect(boolToWord(true)).toBe("Yes");
  expect(boolToWord(false)).toBe("No");
});
