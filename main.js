let myLibrary = {}

function BOOK (title, author, pages, pagesRead, completed, rating, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pagesRead = pagesRead
    this.completed = completed
    this.rating = rating
    this.id = id
}

const titleInput = document.getElementById('title-input')
const authorInput = document.getElementById('author-input')
const pagesInput = document.getElementById('pages-input')
const pagesReadInput = document.getElementById('pages-read-input')
const completedInput = document.getElementById('completed-input')
const ratingInput = document.getElementById('rating-input')
const form = document.getElementById('form')
const bookCase = document.getElementById('book-case')




let newBookCard = (id, title, author, pages, pagesRead, complete, rating) => {
// define elements to create for book card
const tableRow = document.createElement('tr')
const bookTitle = document.createElement('td')
const bookAuthor = document.createElement('td')
const bookPages = document.createElement('td')
const bookPagesRead = document.createElement('td')
const bookComplete = document.createElement('td')
const bookRating = document.createElement('td')

    bookCase.appendChild(tableRow)
    tableRow.setAttribute('id', id)
    tableRow.classList.add('book')

    tableRow.appendChild(bookTitle)
    bookTitle.classList.add('title')
    bookTitle.textContent = title

    tableRow.appendChild(bookAuthor)
    bookAuthor.classList.add('author')
    bookAuthor.textContent = author

    tableRow.appendChild(bookPages)
    bookPages.classList.add('pages')
    bookPages.textContent = pages

    tableRow.appendChild(bookPagesRead)
    bookPagesRead.classList.add('pagesRead')
    bookPagesRead.textContent = pagesRead

    tableRow.appendChild(bookComplete)
    bookComplete.classList.add('complete')
    bookComplete.textContent = complete

    tableRow.appendChild(bookRating)
    bookRating.classList.add('rating')
    bookRating.textContent = rating

}

let bookId = 0

const createNewBook = () => {
    bookId += 1
    return new BOOK (titleInput.value, authorInput.value, pagesInput.value, pagesReadInput.value, completedInput.value, ratingInput.value, bookId)
}

const addNewBookToLibrary = (book) => {    
    myLibrary = {
        ...myLibrary,
        [book.id]: {...book}
    }
}

function removeCard (item) {
    item.remove();
}

const displayMyLibrary = () => {
    let keys = Object.keys(myLibrary)

    const newBookCards = document.querySelectorAll('.book');
    newBookCards.forEach(removeCard);
    // let numberOfBooks = Object.keys(myLibrary).length
    // for (let i = 1; i > numberOfBooks; i++)
    keys.forEach( (key) => {
        console.log(myLibrary[key])
        newBookCard(myLibrary[key].id, myLibrary[key].title, myLibrary[key].author, myLibrary[key].pages, myLibrary[key].pagesRead, myLibrary[key].completed, myLibrary[key].rating)
    })
}

const handleAddBookClick = () => {
    addNewBookToLibrary(createNewBook())
    console.log(myLibrary)
    form.reset()
    displayMyLibrary()
    listenForHover()
}

const addBookButton = document.getElementById('addBookButton')
addBookButton.addEventListener('click', handleAddBookClick)

listenForHover()

function hello () {
    console.log('hello')
}


function listenForHover() {

    const libraryBooks = document.querySelectorAll('.book')
    libraryBooks.forEach( book => {
        book.addEventListener('mouseenter', hello)
    })
}


