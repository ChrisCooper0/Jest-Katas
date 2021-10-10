const between = require("./InBetween");

test("Returns an array of all integers between the input parameters, including them", () => {
  expect(between(1, 4)).toEqual([1, 2, 3, 4]);
});
