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
    form.reset()
    displayMyLibrary()
    listenForMouseEventsOnBooks()
}

const addBookButton = document.getElementById('addBookButton')
addBookButton.addEventListener('click', handleAddBookClick)

listenForMouseEventsOnBooks()

function mouseOver () {
    console.log('hello')
    this.classList.add('bg-info')
}

function mouseOut () {
    console.log('bye')
    this.classList.remove('bg-info')
}

function showBook () {
    openBookDetails()
}

function listenForMouseEventsOnBooks() {

    const libraryBooks = document.querySelectorAll('.book')
    libraryBooks.forEach( book => {
        book.addEventListener('mouseenter', mouseOver)
        book.addEventListener('mouseout', mouseOut)
        book.addEventListener('click', showBook)
    })
}

function openBookDetails() {
    console.log('Book is open')
    
    const bookDetailsOverlay = document.createElement('div')
    const bookDetailCard = document.createElement('div')

    const bookTitleHeading = document.createElement('h2')
    const bookAuthorHeading = document.createElement('h4')

    const bookDetailsNameDiv = document.createElement('div')
    const bookDetailsDiv =  document.createElement('div')

    const bookPages = document.createElement('label')
    const bookPagesRead = document.createElement('label')
    const bookRating = document.createElement('label')
    const bookSummary = document.createElement('label')

    const btnDiv = document.createElement('div')
    const completedBtn = document.createElement('button')
    const editdBtn = document.createElement('button')
    const deletedBtn = document.createElement('button')

    const bookPagesValue = document.createElement('p')
    const bookPagesReadValue = document.createElement('P')
    const bookRatingValue = document.createElement('P')
    const bookSummaryValue = document.createElement('P')

    const bookPagesValueInput = document.createElement('input')
    const bookPagesReadValueInput = document.createElement('input')
    const bookRatingValueInput = document.createElement('input')
    const bookSummaryValueInput = document.createElement('input')

    document.body.appendChild(bookDetailsOverlay)
    bookDetailsOverlay.setAttribute('id', 'bookDetailsOverlay')
    bookDetailsOverlay.appendChild(bookDetailCard)
    bookDetailCard.setAttribute('id', 'bookDetailCard')

    bookDetailCard.appendChild(bookTitleHeading)
    bookTitleHeading.classList.add('row')
    bookDetailCard.appendChild(bookAuthorHeading)
    bookAuthorHeading.classList.add('row')


    bookDetailCard.appendChild(bookDetailsNameDiv)
    bookDetailsNameDiv.classList.add('col')
    bookDetailsNameDiv.appendChild(bookPages)    
    bookPages.classList.add('row')
    bookDetailCard.appendChild(bookPagesRead)
    bookPagesRead.classList.add('row')
    bookDetailCard.appendChild(bookRating)
    bookRating.classList.add('row')
    bookDetailCard.appendChild(bookSummary)
    bookSummary.classList.add('row')

    bookDetailCard.appendChild(bookDetailsDiv)
    bookDetailsDiv.classList.add('col')
    bookDetailCard.appendChild(bookPagesValue)
    bookPagesValue.classList.add('row')
    bookDetailCard.appendChild(bookPagesReadValue)
    bookPagesReadValue.classList.add('row')
    bookDetailCard.appendChild(bookRatingValue)
    bookRatingValue.classList.add('row')
    bookDetailCard.appendChild(bookSummaryValue)
    bookSummaryValue.classList.add('row')

    bookDetailCard.appendChild(btnDiv)
    btnDiv.classList.add('row')
    bookDetailCard.appendChild(completedBtn)
    completedBtn.classList.add('btn')
    completedBtn.classList.add('btn-success')
    completedBtn.classList.add('btn-lg')
    bookDetailCard.appendChild(editdBtn)
    editdBtn.classList.add('btn')
    editdBtn.classList.add('btn-secondary')
    editdBtn.classList.add('btn-lg')
    bookDetailCard.appendChild(deletedBtn)
    deletedBtn.classList.add('btn')
    deletedBtn.classList.add('btn-danger')
    deletedBtn.classList.add('btn-lg')

}

function createBookDetailsCard() {

}

function listenForEditClick() {

}

function listenForDeleteClick() {

}

function updateThisBook() {

}
