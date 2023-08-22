const palindromes = function (string) {
  let array = string.split("");
  let cleanString = "";

  for (char of array) {
    // verify if char is a letter and not punctuation
    // OR if char is a number
    if (char.toLowerCase() !== char.toUpperCase() ||
       /[0-9]/.test(char) )
      cleanString += char.toLowerCase();
  }

  let reversedString = cleanString.split("").reverse().join("");

  if (cleanString === reversedString)
    return true;

  return false;
};

// Do not edit below this line
module.exports = palindromes;
