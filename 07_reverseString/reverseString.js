const reverseString = function (text) {
  let arr = text.split("");
  let reverse = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reverse += arr[i];
  }

  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
