function shelfBook(book, array) {
  if (array.length < 3) {
  array.unshift(book);
  }
}

function unshelfBook(title, bookShelf) {
  for (var i = 0; i < bookShelf.length; i++) {
    if (bookShelf[i].title === title) {
      bookShelf.splice(i, 1)
    }
  }
}

function listTitles(shelf) {
  var arr = [];
  for (var i = 0; i < shelf.length; i++) {
    arr.push(shelf[i].title);
  }
  return arr.join(', ')
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true
    }
  }
  return false
}



module.exports = {
 shelfBook,
 unshelfBook,
 listTitles,
 searchShelf
};
