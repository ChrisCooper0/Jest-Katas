const disemVowel = require("../RemoveVowels.js");

test("removes all vowels", () => {
  expect(disemVowel("TestaeiouAEIOUString")).toBe("TstStrng");
});

test("does not contain a vowel", () => {
  expect(disemVowel("TestString")).not.toMatch("TestString");
  expect(disemVowel("TestString")).not.toMatch(/aeiou/gi);
});
