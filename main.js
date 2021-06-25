let myLibrary = [];

function Book(title, author, pages, pagesRead, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pagesRead = pagesRead;
    this.rating = rating;
};

function displayBooks () {
    let myBooks = myLibrary.map( function (book) {
        console.log(book.title);
        console.log(book.author);
        console.log(book.pages);
        console.log(book.pagesRead);
        console.log(book.rating);
    })
}

// function createNewBook(title, author, pages, pagesRead, rating) {
//     let newBook = new Book (title, author, pages, pagesRead, rating)
// }

// Form Details
const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const pagesRead = document.querySelector('#pagesRead');
const rating = document.querySelector('#rating');
// 

// Create page entry for book
const bookDiv = document.createElement('div');
const bookTitle = document.createElement('p');
const bookAuthor = document.createElement('p');
const bookPages = document.createElement('p');
const bookPagesRead = document.createElement('p');
const bookComplete = document.createElement('p');
const bookRating = document.createElement('p');
const bookShelf = document.querySelector('#bookShelf');

function createBookCard (title,  author, pages, pagesRead, rating) {
    bookShelf.appendChild(bookDiv)
    bookDiv.classList.add('book');

    bookDiv.appendChild(bookTitle);
    bookTitle.classList.add('title');
    bookTitle.textContent = title;

    bookDiv.appendChild(bookAuthor);
    bookAuthor.classList.add('author');
    bookAuthor.textContent = author;

    bookDiv.appendChild(bookPages);
    bookPages.classList.add('pages');
    bookPages.textContent = pages;

    bookDiv.appendChild(bookPagesRead);
    bookPagesRead.classList.add('pagesRead');
    bookPagesRead.textContent = pagesRead;

    // bookDiv.appendChild(bookComplete);
    // bookComplete.classList.add('complete');
    // bookComplete.textContent = title;

    bookDiv.appendChild(bookRating);
    bookRating.classList.add('rating');
    bookRating.textContent = rating;

}
// 

function addBookToLibrary() {
    let newBook = new Book (title.value, author.value, pages.value, pagesRead.value, rating.value);
    myLibrary.push(newBook);
    console.table(myLibrary);
    form.reset();
}

const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', addBookToLibrary);
