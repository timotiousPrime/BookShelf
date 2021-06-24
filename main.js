let myLibrary = [];

function Book(title, author, pages, pagesRead, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pagesRead = pagesRead;
    this.rating = rating
};

function createNewBook(ev) {
    ev.preventDefault();
    let bookTitle = document.getElementById('title').value;
    let bookAuthor = document.getElementById('author').value;
    let id = Date.now();

    let NewBook = new Book (bookTitle, bookAuthor);
    myLibrary.push(NewBook);
    console.log('new book added');
}

