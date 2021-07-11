// function mouthSize(animal) {
//   if (animal === "alligator") {
//     return "small";
//   } else {
//     return "wide";
//   }
// }

// Refactored solution
const mouthSize = (animal) => {
  return animal === "alligator" ? "small" : "wide";
};

module.exports = mouthSize;
