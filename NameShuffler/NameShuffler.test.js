const nameShuffler = require("./NameShuffler");

test("returns reversed firstname and lastname", () => {
  expect(nameShuffler("Chris Cooper")).toBe("Cooper Chris");
});
