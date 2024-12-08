const myLibrary = [];

function Crbook(name, author, date, read) {
  this.name = name;
  this.author = author;
  this.date = date;
  this.read = read;
}

const book_name = document.querySelector("#book-name");
const book_author = document.querySelector("#book-author");
const book_date = document.querySelector("#book-release-date");
const book_read = document.querySelector("#have-read");
const books = document.querySelector(".books");
const add = document.querySelector("#btn");

function renderBooks() {
  books.innerHTML = ""; 
  myLibrary.forEach((bookElement, index) => {
    const book = document.createElement("div");
    book.classList.add("book");

    const bookName = document.createElement("p");
    bookName.textContent = `Name: ${bookElement.name}`;

    const author = document.createElement("p");
    author.textContent = `Author: ${bookElement.author}`;

    const date = document.createElement("p");
    date.textContent = `Release Date: ${bookElement.date}`;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.disabled = true; 
    input.checked = bookElement.read;

    const toggleRead = document.createElement("button");
    toggleRead.textContent = bookElement.read ? "Mark as Unread" : "Mark as Read";
    toggleRead.dataset.index = index;
    toggleRead.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      myLibrary[index].read = !myLibrary[index].read; 
      renderBooks(); 
    });

    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.dataset.index = index;
    remove.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      myLibrary.splice(index, 1);
      renderBooks();
    });

    book.appendChild(bookName);
    book.appendChild(author);
    book.appendChild(date);
    book.appendChild(input);
    book.appendChild(toggleRead);
    book.appendChild(remove);

    books.appendChild(book);
  });
}

add.addEventListener("click", () => {
  const newBook = new Crbook(
    book_name.value,
    book_author.value,
    book_date.value,
    book_read.checked
  );
  myLibrary.push(newBook);
  renderBooks();
});
