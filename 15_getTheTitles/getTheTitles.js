const getTheTitles = function (arr) {
  let new_arr = [];

  for (let i = 0; i < arr.length; i++) {
    new_arr.push(arr[i].title);
  }

  return new_arr;
};

// Do not edit below this line
module.exports = getTheTitles;
