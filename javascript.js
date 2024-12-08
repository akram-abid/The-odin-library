const myLibrary = [];
let index = 0;

function Crbook(name, author, date, read) {
  this.name = name;
  this.author = author;
  this.date = date;
  this.read = read;
  this.sayMe = function () {
    console.log(`title:${this.name} author:${this.author}`);
  };
}

const book1 = new Crbook("little", "me", "now", false);
book1.name = "huge";
console.log(book1.name);
book1.sayMe();
myLibrary.push(book1);
myLibrary[0].sayMe();

const book_name = document.querySelector("#book-name");
const book_author = document.querySelector("#book-author");
const book_date = document.querySelector("#book-release-date");
const book_read = document.querySelector("#have-read");
console.log(book_read.checked);
const books = document.querySelector(".books");

const add = document.querySelector("#btn");
add.addEventListener("click", () => {
  
  const book = document.createElement("div");
  book.classList.add("book");
  const bookName = document.createElement("p");
  bookName.classList.add("name");
  const author = document.createElement("p");
  author.classList.add("author");
  const date = document.createElement("p");
  date.classList.add("date");
  const label = document.createElement("p");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.name = "read";
  input.disabled = true;
  const isread = document.createElement("div");
  const newBook = new Crbook(
    `Book Name: ${book_name.textContent}`,
    `Author: ${book_author}`,
    `date release: ${book_date}`,
    `book status: ${book_read}`
  );
  myLibrary.push(newBook);
  myLibrary.forEach((bookElement) => {
    bookName.textContent = book_name.value;
    author.textContent = book_author.value;
    date.textContent = book_date.value;
    input.checked = book_read.checked;
    isread.classList.add("is-read");
    isread.appendChild(label);
    isread.appendChild(input);
    book.dataset.index = index;
    index += 1;
    book.appendChild(bookName);
    book.appendChild(author);
    book.appendChild(date);
    book.appendChild(isread);
    books.appendChild(book);
  });
  console.log(book_name.value);
  console.log("clicked");
});
