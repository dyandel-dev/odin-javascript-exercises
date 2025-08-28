const sumAll = function (a, b) {
  let sum = 0;

  if (
    !Number.isInteger(a, b) ||
    a < 0 ||
    b < 0 ||
    typeof a === "string" ||
    typeof b === "string" ||
    Array.isArray(a) ||
    Array.isArray(b)
  ) {
    return "ERROR";
  } else {
    if (a > b) {
      for (let i = a; i >= b; i--) {
        sum += i;
      }
    } else {
      for (let i = a; i <= b; i++) {
        sum += i;
      }
    }
    return sum;
  }
};

console.log(sumAll(1, "10"));

// Do not edit below this line
module.exports = sumAll;
