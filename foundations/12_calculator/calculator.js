const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, elem) => total + elem, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, elem) => total * elem, 1);
};

const power = function(base, exponent) {
	var result = 1;
  for(let i = 0; i < exponent; i++){
    result *= base;
  }
  return result;
};

const factorial = function(num) {
	var result = 1;
  for(let i = num; i > 0; i--){
    result *= i;
  }
  return result;
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
