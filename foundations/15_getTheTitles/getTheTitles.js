const getTheTitles = function(books) {
    return books.reduce((bookList, bookObj) => {
        bookList.push(bookObj.title);
        return bookList;
    }, []);
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
