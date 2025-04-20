const findTheOldest = function(arr) {
  let oldest = arr.reduce((accumulator, currentValue) => {
    let currentDeath = currentValue.yearOfDeath || 2025;
    let accumulatorDeath = accumulator.yearOfDeath || 2025;
    
    let currentAge = accumulatorDeath - accumulator.yearOfBirth;
    let nextPersonAge = currentDeath - currentValue.yearOfBirth;
    
    if(currentAge < nextPersonAge){
      return currentValue;
    } else {
      return accumulator;
    }
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
