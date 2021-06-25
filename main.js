let myLibrary = [];

function Book(title, author, pages, pagesRead, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pagesRead = pagesRead;
    this.rating = rating;
};

// function displayBooks () {
//     let myBooks = myLibrary.map( function (book) {
//         console.log(book.title);
//         console.log(book.author);
//         console.log(book.pages);
//         console.log(book.pagesRead);
//         console.log(book.rating);
//     })
// }

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

function addBookToLibrary() {
    let newBook = new Book (title.value, author.value, pages.value, pagesRead.value, rating.value);
    myLibrary.push(newBook);
    console.table(myLibrary);
    form.reset();
}

const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', addBookToLibrary);
