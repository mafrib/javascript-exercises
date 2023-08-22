const sumAll = function(num1, num2) {
  if (typeof(num1) != "number" || typeof(num2) != "number"
      || num1 < 0 || num2 < 0)
    return "ERROR";

  sorted = [num1, num2].sort();

  let result = 0;
  for (let i = sorted[0]; i <= sorted[1]; i++){
    result += i;
  }
  return result;

};

// Do not edit below this line
module.exports = sumAll;
