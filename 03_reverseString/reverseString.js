const reverseString = function(str) {
    let newStr = "";
    let lastChar = str.length - 1;
    while(lastChar >= 0){
        newStr += str[lastChar];
        lastChar--;
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
