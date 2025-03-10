const repeatString = function(str, count) {
    let newStr = "";
    if(count < 0){
        return 'ERROR';
    } else {
        for(let i = 0; i < count; i++){
            newStr += str;
        }
        return newStr;
    }
};

// Do not edit below this line
module.exports = repeatString;
