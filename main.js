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
    item.remove();
}

function displayLibrary () {

    const bookCards = document.querySelectorAll('.book');
    bookCards.forEach(removeCard);

    // Set the index for each book in the library and create a book card for each
    myLibrary.map( function (book) {
        let bookIndex = myLibrary.indexOf(book);
        book.index = bookIndex;
        createBookCard(book.title, book.author, book.pages, book.pagesRead, book.rating, book.index);
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

function createBookCard (title,  author, pages, pagesRead, rating, index) {
    
    // Create page entry for book
    const bookDiv = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const bookPagesRead = document.createElement('p');
    const bookComplete = document.createElement('p');
    const bookRating = document.createElement('p');
    const bookShelf = document.querySelector('#bookShelf');

    
    bookShelf.appendChild(bookDiv);
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', index)

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
    console.log(myLibrary.indexOf(newBook));
    displayLibrary();
    form.reset();
    listenForHover()
    }

const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', addBookToLibrary);

// function displayDeleteBtn(e){



//     console.log(e.target.id)

//     const bookDiv = document.querySelector('.book');
//     const deleteBtn = document.createElement('div');
//     const deleteLineOne = document.createElement('div');
//     const deleteLineTwo = document.createElement('div');
    
//     bookDiv.appendChild(deleteBtn);
//     deleteBtn.setAttribute('id', 'deleteBtn');;

//     deleteBtn.appendChild(deleteLineOne);
//     deleteLineOne.classList.add('deleteXlineOne');

//     deleteBtn.appendChild(deleteLineTwo);
//     deleteLineOne.classList.add('deleteXlineTwo');

//     console.log('the mouse is hovering over a bookdiv')
// }

// function listenForHover() {
//     let libraryBooks = document.querySelectorAll('.book');
//     libraryBooks.forEach(book => {
//         book.addEventListener('mouseover', displayDeleteBtn)
// });
// };
listenForHover();

function displayDeleteBtn(){

    const deleteBtn = document.createElement('div');
    const deleteLineOne = document.createElement('div');
    const deleteLineTwo = document.createElement('div');

    deleteBtn.appendChild(deleteLineOne);
    deleteLineOne.classList.add('deleteXlineOne');

    deleteBtn.appendChild(deleteLineTwo);
    deleteLineOne.classList.add('deleteXlineTwo');

    
    this.appendChild(deleteBtn);
    deleteBtn.setAttribute('id', 'deleteBtn');
}

function removeDeleteBtn(){
    delBtn = document.getElementById('deleteBtn');
    delBtn.remove();
}

function listenForHover() {
    const libraryBooks = document.querySelectorAll('.book');
    libraryBooks.forEach(book => {
        book.addEventListener('mouseenter', displayDeleteBtn);
        book.addEventListener('mouseleave', removeDeleteBtn)
    })
}


// function addDeleteBtn(e){
//     console.log(e)
// }