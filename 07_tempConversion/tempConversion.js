const convertToCelsius = function(temp) {
  let isCelsius;
  isCelsius = (temp - 32) * (5/9);
  return Number(isCelsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let isFahrenheit = 0;
  isFahrenheit = (temp * (9/5)) + 32;
  return Number(isFahrenheit.toFixed(1)); 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
