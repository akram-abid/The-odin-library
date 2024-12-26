class Book {
  constructor(name, author, date, read) {
    this.name = name;
    this.author = author;
    this.date = date;
    this.read = read;
  }

  toggleReadStatus() {
    this.read = !this.read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  toggleBookReadStatus(index) {
    this.books[index].toggleReadStatus();
  }
}

