const remove = require("./Remove!");

test("removes last exclamation mark from end of string", () => {
  expect(remove("Hi!!!")).toBe("Hi!!");
});

test("removes the only exclamation mark from end of string", () => {
  expect(remove("Hi!")).toBe("Hi");
});

test("removes ending exclamation mark from end of string, leaving the leading exclamation", () => {
  expect(remove("!Hi!")).toBe("!Hi");
});

test("removes last exclamation mark from end of string", () => {
  expect(remove("Hi! Hi!")).toBe("Hi! Hi");
});
