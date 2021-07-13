const repeatStr = require("../StringRepeat");

test("repeats string (s) however many times (n)", () => {
  expect(repeatStr(3, "Ho")).toBe("HoHoHo");
});

