let myLibrary = [];

function Book(title, author, pages, pagesRead, rating, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pagesRead = pagesRead;
    this.rating = rating;
    this.index = index;
};

function removeCard (item) {
    item.remove()
}

function displayBooks () {

    const bookCards = document.querySelectorAll('.book');
    bookCards.forEach(removeCard)

    myLibrary.map( function (book) {
        createBookCard(book.title, book.author, book.pages, book.pagesRead, book.rating)

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
    
    // Create page entry for book
    const bookDiv = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const bookPagesRead = document.createElement('p');
    const bookComplete = document.createElement('p');
    const bookRating = document.createElement('p');
    const bookShelf = document.querySelector('#bookShelf');

    
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

function setBookIndex(newBook){
    let index = myLibrary.indexOf(newBook)
    console.log('The index of the new book is ' + index)
    newBook.index = index;
    console.log(newBook)
}

function addBookToLibrary() {
    let newBook = new Book (title.value, author.value, pages.value, pagesRead.value, rating.value);
    myLibrary.push(newBook);
    console.log(myLibrary.indexOf(newBook));
    setBookIndex(newBook)
    displayBooks()
    form.reset();
    }

const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', addBookToLibrary);
