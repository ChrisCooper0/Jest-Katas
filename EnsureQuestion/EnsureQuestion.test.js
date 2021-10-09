const ensureQuestion = require("./EnsureQuestion");

test("returns string as already has ? at end", () => {
  expect(ensureQuestion("Test?")).toMatch("Test?");
});

test("returns string with ? at end", () => {
  expect(ensureQuestion("Test")).toMatch("Test?");
});
