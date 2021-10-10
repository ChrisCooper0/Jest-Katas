const noSpace = require("./RemoveSpaces");

test("removes all spaces from the string", () => {
  expect(noSpace(" aa bb cc ")).toBe("aabbcc");
});
