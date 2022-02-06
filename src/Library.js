function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library
}

function addBook(library, book) {
  if (book.genre === 'fantasy') {
    library.shelves.fantasy.push(book)
  }
  if (book.genre === 'nonFiction') {
    library.shelves.nonFiction.push(book)
  }
  if (book.genre === 'fiction') {
    library.shelves.fiction.push(book)
  }
  return library
}

function checkoutBook(library, bookName, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === bookName) {
      library.shelves[genre].splice(i, 1)
      return `You have now checked out ${bookName} from the ${library.name}`
    }
  }
  return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
