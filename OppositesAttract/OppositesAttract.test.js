const loveFunc = require("./OppositesAttract")

test(('returns true if one flower is an odd number and the other is even, otherwise returns false'), () => {
    expect(loveFunc(2,7)).toBe((true));
})

test(('returns true if one flower is an odd number and the other is even, otherwise returns false'), () => {
    expect(loveFunc(5,9)).toBe((false));
})