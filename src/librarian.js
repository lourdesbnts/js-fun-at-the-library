class Librarian {
  constructor(librarianName, library) {
    this.name = librarianName;
    this.library = library;
  }
  greetPatron(personName, morning) {
    if (!morning) {
      return `Hello, ${personName}!`
    }
    return `Good morning, ${personName}!`
  }
  findBook(bookName) {
    for (var i = 0; i < this.library.shelves.fantasy.length; i++) {
      if (bookName === this.library.shelves.fantasy[i].title) {
        return `Yes, we have ${bookName}`
        console.log(checkoutBook)
      } return `Sorry, we do not have ${bookName}`
    }
  }
}

module.exports = Librarian;
