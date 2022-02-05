function createTitle(bookTitle) {
  return `The ${bookTitle}`
};

function buildMainCharacter(name, age, pronouns) {
  var characterFacts = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return characterFacts
};

function saveReview(review, bookReviews) {
      if (!bookReviews.includes(review)) {
        bookReviews.push(review);
  }
};

function calculatePageCount(title) {
  return title.length * 20
}

function writeBook(title, character, genre) {
  var titleLength = calculatePageCount(title)
  var book = {
  title: title,
  mainCharacter: character,
  pageCount: titleLength,
  genre: genre
  }
  return book
}

function editBook(book) {
  book.pageCount = book.pageCount * 3/4
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
