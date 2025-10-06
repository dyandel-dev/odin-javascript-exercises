const palindromes = function (text) {
  const remove_char = text.replace(/[.,!\s]/g, "").toLowerCase();

  const reverse_string = remove_char.split("").reverse().join("");

  return remove_char === reverse_string;
};

// Do not edit below this line
module.exports = palindromes;
