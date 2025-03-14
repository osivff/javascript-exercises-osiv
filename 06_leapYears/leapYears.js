const leapYears = function(year) {
    isLeapYear = year % 4;
    isException = year % 400;
    isNotLeapYear = year % 100;

    if(isException === 0 && isLeapYear === 0){
        return true;
    } else if(isLeapYear === 0 && isNotLeapYear != 0){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
