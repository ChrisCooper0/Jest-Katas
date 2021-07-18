const lightsabers = require("../Lightsabers");

test("Takes in a name and return 18 if name is Zack, otherwise 0 for anyone else", () => {
  expect(lightsabers("Zach")).toBe(18);
});

test("Takes in a name and return 18 if name is Zack, otherwise 0 for anyone else", () => {
  expect(lightsabers("Chris")).toBe(0);
});
