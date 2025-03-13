const sumAll = function(a, b) {
    let sum = 0;
    let checkIntegerA = Number.isInteger(a);
    let checkIntegerB = Number.isInteger(b);
    let checkTypeOfA = typeof(a);
    let checkTypeOfB = typeof(b);

    if(a < 0 || b < 0 || !checkIntegerA || !checkIntegerB || checkTypeOfA != "number" || checkTypeOfB != "number"){
        return 'ERROR';
    }else if(a < b){
        for(a; a <= b; a++){
            sum += a;
        }
    } else {
        for(b; b <= a; b++){
            sum += b;
        }
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
