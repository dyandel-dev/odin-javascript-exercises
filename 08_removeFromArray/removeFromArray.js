const removeFromArray = function (arr, ...args) {
  const newArr = [];

  arr.forEach((item) => {
    if (!args.includes(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};

console.log(removeFromArray([1, 2, 2, 3], 2));

// Do not edit below this line
module.exports = removeFromArray;
