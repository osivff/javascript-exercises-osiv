const getTheTitles = function(arr) {
    let bookTitles = [];
    for(book of arr){
        bookTitles.push(book.title);
    }
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
