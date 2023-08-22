const reverseString = function(text) {
  arr = [];

  for (let i = 0; i < text.length; i++) {
    arr.push(text[i]);
  } //this could be replaced by text.split("")

  reversedArr = arr.reverse();
  result = '';

  for (let i = 0; i < text.length; i++) {
    result += reversedArr[i];
  } // this could be replaced by join method
  return result;
}

// Do not edit below this line
module.exports = reverseString;
