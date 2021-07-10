const { expect } = require("@jest/globals");
const getRealFloor = require("./AmericanFloors");

test("gets real floor number", () => {
  expect(getRealFloor(5)).toBe(4);
  expect(getRealFloor(15)).toBe(13);
});
