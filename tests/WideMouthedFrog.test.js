const { expect } = require("@jest/globals");
const mouthSize = require("../WideMouthedFrog");

test("do not eat the alligator!", () => {
  expect(mouthSize("alligator")).toBe("small");
  expect(mouthSize("insect")).toBe("wide");
});
