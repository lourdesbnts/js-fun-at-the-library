function shelfBook(book, array) {
  if (array.length < 3) {
  array.unshift(book);
  }
}

function unshelfBook() {
  
}

module.exports = {
 shelfBook,
 unshelfBook,
  // listTitles,
  // searchShelf
};
