const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let result = 0;
  for(i = 0; i <= arr.length - 1; i++){
    result += arr[i];
  }
  return Number(result);
};

const multiply = function(arr) {
  let result = 1;
  for(let num of arr) {
    result *= num;
  }
  return result;
};

const power = function(base, exp) {
	let result = 1;
  for(i = 1; i <= exp; i++){
    result *= base;
  }
  return result;
};

const factorial = function(num) {
  let result = 1;
  for(i = 1; i <= num; i++){
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
