const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  for (num of array) {
    sum += num;
  }
  return sum;
};

const multiply = function(array) {
  let mult = 1;
  for (num of array) {
    mult *= num;
  }
  return mult;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  let res = 1;
  for (i = num; i > 0; i--) {
    res *= i;
  }
	return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
