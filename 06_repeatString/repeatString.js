const repeatString = function (text, num) {
  let repeated = "";

  if (num < 0) {
    return "ERROR";
  }

  for (let i = 0; i < num; i++) {
    repeated += text;
  }

  return repeated;
};

// Do not edit below this line
module.exports = repeatString;
