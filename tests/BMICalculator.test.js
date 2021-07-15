const bmi = require("../BMICalculator")

test("calculates BMI based on weight and height", () => {
    expect(bmi(50, 70)).toBe(('Underweight'));
})