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

const bookCase = document.getElementById('book-case')

// define elements to create for book card
const tableRow = document.createElement('tr')
const bookTitle = document.createElement('td')
const bookAuthor = document.createElement('td')
const bookPages = document.createElement('td')
const bookPagesRead = document.createElement('td')
const bookComplete = document.createElement('td')
const bookRating = document.createElement('td')


const bookCard = (id, title, author, pages, pagesRead, complete, rating) => {

    bookCase.appendChild(tableRow)
    tableRow.setAttribute('id', id)

    tableRow.appendChild(bookTitle)
    bookTitle.className.add('title')
    bookTitle.textContent = title

    tableRow.appendChild(bookAuthor)
    bookAuthor.className.add('title')
    bookAuthor.textContent = author

    tableRow.appendChild(bookPages)
    bookPages.className.add('title')
    bookPages.textContent = pages

    tableRow.appendChild(bookPagesRead)
    bookPagesRead.className.add('title')
    bookPagesRead.textContent = pagesRead

    tableRow.appendChild(bookComplete)
    bookComplete.className.add('title')
    bookComplete.textContent = complete

    tableRow.appendChild(bookRating)
    bookRating.className.add('title')
    bookRating.textContent = rating

}

let bookId = 0

const createNewBook = (title, author, pages, pagesRead, completed, rating) => {
    bookId += 1
    return new BOOK (title, author, pages, pagesRead, completed, rating, bookId)
}

const addNewBookToLibrary = () => {
    let newBook = createNewBook(titleInput.value, authorInput.value, pagesInput.value, pagesReadInput.value, completedInput.value, ratingInput.value, bookId)
    console.log(newBook)
    
    return myLibrary = {
        ...myLibrary,
        [newBook.id]: {...newBook}
    }

}

const tellMe = () => {
    console.log('did you hear me?')
}

const addBookButton = document.getElementById('addBookButton')
addBookButton.addEventListener('click', addNewBookToLibrary)