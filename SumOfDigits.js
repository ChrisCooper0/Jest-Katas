function sum(digits) {
  if (typeof digits == "number") {
    digits = JSON.stringify(digits);
  }

  if (digits === undefined) {
    return "";
  }

  if (digits.length <= 1) {
    return `${digits} = ${digits}`;
  }

  let sum = 0;
  let calc = "";
  let firstVal = digits.slice(0, 1);
  let remainingVal = digits.slice(1);
  for (let i = 0; i < remainingVal.length; i++) {
    if (remainingVal.length <= 1) {
      calc += `${remainingVal[i]}`;
      sum += parseInt(remainingVal[i]);
    } else {
      sum += parseInt(remainingVal[i]);
      calc += ` + ${remainingVal[i]}`;
    }
  }
  sum += parseInt(firstVal);
  return `${firstVal}${calc} = ${sum}`;
}

console.log(sum("12345")); // 1 + 2 + 3 + 4 + 5 = 15
console.log(sum(1)); // 1 = 1
console.log(sum(12345)); // 1 + 2 + 3 + 4 + 5 = 15
console.log(sum()); // 
