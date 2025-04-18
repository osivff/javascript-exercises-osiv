const palindromes = function (str) {
    let arr = str.split('');
    let newArr = [];
    let revArr = [];
    console.log(arr);
    arr.forEach((current) => {
      if(/^[a-zA-Z0-9]$/.test(current)){
          newArr.push(current);
      }
    })
    
    for(i = newArr.length -1; i >= 0; i--){
      revArr.push(newArr[i]);
    }
    for(i = 0; i <= newArr.length -1; i++){
      if(newArr[i].toLowerCase() !== revArr[i].toLowerCase()){
        return false;
      }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
