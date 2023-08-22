const repeatString = function(text, num) {
  result = '';
  for (let i = 0; i < num; i++) {
    result += text;
  }
  if (num < 0)
    result += 'ERROR';
  return result;
};

// Do not edit below this line
module.exports = repeatString;
