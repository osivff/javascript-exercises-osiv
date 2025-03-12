const removeFromArray = function(arr, ...itemToRemove) {
    let newArr = [];

    for(let i = 0; i <= arr.length; i++){
        let keepItem = true;
        for(let j = 0; j <= itemToRemove.length; j++){
            if(arr[i] === itemToRemove[j]){
                keepItem = false;
                break;
            }
        }
        if(keepItem === true){
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
