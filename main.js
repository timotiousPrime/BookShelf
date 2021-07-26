let myLibrary = {}

const BOOK = (title, author, pages, pagesRead, completed, rating, id) => {
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

let bookId

const bookCard = (id, title, author, pages, pagesRead, complete, rating) => {

    bookCase.appendChild(tableRow)
    tableRow.setAttribute('id', id)

    tableRow.appendChild(bookTitle)
    bookTitle.className.add('title')
    bookTitle.textContent = title

    tableRow.appendChild(bookTitle)
    bookAuthor.className.add('title')
    bookAuthor.textContent = author

    tableRow.appendChild(bookTitle)
    bookPages.className.add('title')
    bookPages.textContent = pages

    tableRow.appendChild(bookTitle)
    bookPagesRead.className.add('title')
    bookPagesRead.textContent = pagesRead

    tableRow.appendChild(bookTitle)
    bookComplete.className.add('title')
    bookComplete.textContent = complete

    tableRow.appendChild(bookTitle)
    bookRating.className.add('title')
    bookRating.textContent = rating

}

const createNewBook = () => {
    bookId += 1

    return new BOOK (titleInput.value, authorInput.value, pagesInput.value, pagesReadInput.value, completedInput.value, ratingInput.value, bookId)
}

const addNewBookToLibrary = () => {
    let book = createNewBook()
    return {
        myLibrary: {
            ...myLibrary,
            [book.id]: {...book}
        }
    }
}

const tellMe = () => {
    console.log('did you hear me?')
}

const addBookButton = document.getElementById('addBookButton')
addBookButton.addEventListener('click', tellMe)