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
    return new BOOK (titleInput.value, authorInput.value, pagesInput.value, pagesReadInput.value, completedInput.checked, ratingInput.value, bookId)
}

const addNewBookToLibrary = (book) => {    
    myLibrary = {
        ...myLibrary,
        [`ID${book.id}`]: {...book}
    }
}

const updateMyLibrary = () => {
    !localStorage.theLibrary ? console.log(`You haven't added any books yet`) : 
        myLibrary = unpackTheLibrary()
}

const saveLibrary = (library) => {
    localStorage.setItem('theLibrary', JSON.stringify(library))
}

const clearStoredLibrary = () => {
    localStorage.clear()
}


function removeCard (item) {
    item.remove();
}

const unpackTheLibrary = () => {
    const library = JSON.parse(localStorage.theLibrary)
    return library
}

const displayMyLibrary = () => {
    let keys = Object.keys(unpackTheLibrary())

    console.log(keys)
    const newBookCards = document.querySelectorAll('.book');
    newBookCards.forEach(removeCard);
    // let numberOfBooks = Object.keys(myLibrary).length
    // for (let i = 1; i > numberOfBooks; i++)
    keys.forEach( (key) => {
        newBookCard(unpackTheLibrary()[key].id, unpackTheLibrary()[key].title, unpackTheLibrary()[key].author, unpackTheLibrary()[key].pages, unpackTheLibrary()[key].pagesRead, unpackTheLibrary()[key].completed, unpackTheLibrary()[key].rating)
    })
}

const handleAddBookClick = () => {
    updateMyLibrary()
    addNewBookToLibrary(createNewBook())
    form.reset()
    // clearStoredLibrary()
    saveLibrary(myLibrary)
    displayMyLibrary()
    listenForMouseEventsOnBooks()
}

const addBookButton = document.getElementById('addBookButton')
addBookButton.addEventListener('click', handleAddBookClick)

listenForMouseEventsOnBooks()

function mouseOver () {
    this.classList.add('bg-info')
}

function mouseOut () {
    this.classList.remove('bg-info')
}

function showBook (book) {
    openBookDetails(book)
}

function listenForMouseEventsOnBooks() {

    const libraryBooks = document.querySelectorAll('.book')
    libraryBooks.forEach( book => {
        book.addEventListener('mouseenter', mouseOver)
        book.addEventListener('mouseout', mouseOut)
        book.addEventListener('click', (e) => {
            console.log(e.target.parentNode.id)
            let bookId = 'ID' + e.target.parentNode.id
            showBook(myLibrary[bookId])
        })
    })
}

function openBookDetails(book) {
    console.log(book)
    // console.log(`Book ${book.id} is open`)
//     console.log(book)

    
//     const bookDetailsOverlay = document.createElement('div')
//     const bookDetailCard = document.createElement('div')

//     const bookTitleHeading = document.createElement('h2')
//     const bookAuthorHeading = document.createElement('h4')

//     const bookDetailsNameDiv = document.createElement('div')
//     const bookDetailsDiv =  document.createElement('div')

//     const bookPages = document.createElement('label')
//     const bookPagesRead = document.createElement('label')
//     const bookRating = document.createElement('label')
//     const bookSummary = document.createElement('label')

//     const btnDiv = document.createElement('div')
//     const completedBtn = document.createElement('button')
//     const editdBtn = document.createElement('button')
//     const deletedBtn = document.createElement('button')

//     // const bookPagesValue = document.createElement('label')
//     // const bookPagesReadValue = document.createElement('label')
//     // const bookRatingValue = document.createElement('label')
//     // const bookSummaryValue = document.createElement('label')

//     const bookPagesValueInput = document.createElement('input')
//     const bookPagesReadValueInput = document.createElement('input')
//     const bookRatingValueInput = document.createElement('input')
//     const bookSummaryValueInput = document.createElement('input')

//     document.body.appendChild(bookDetailsOverlay)
//     bookDetailsOverlay.setAttribute('id', 'bookDetailsOverlay')
//     bookDetailsOverlay.appendChild(bookDetailCard)
//     bookDetailCard.setAttribute('id', 'bookDetailCard')
//     bookDetailCard.classList.add('container')

//     bookDetailCard.appendChild(bookTitleHeading)
//     bookTitleHeading.textContent = `${book.title}`
//     bookTitleHeading.classList.add('row')
//     bookDetailCard.appendChild(bookAuthorHeading)
//     bookAuthorHeading.textContent = `${book.author}`
//     bookAuthorHeading.classList.add('row')

//     bookDetailCard.appendChild(bookDetailsNameDiv)
//     bookDetailsNameDiv.classList.add('col')
//     bookDetailsNameDiv.appendChild(bookPages)    
//     bookPages.textContent = `Pages:`
//     bookPages.classList.add('row')
//     bookDetailCard.appendChild(bookPagesRead)
//     bookPagesRead.classList.add('row')
//     bookDetailCard.appendChild(bookRating)
//     bookRating.classList.add('row')
//     bookDetailCard.appendChild(bookSummary)
//     bookSummary.classList.add('row')

//     bookDetailCard.appendChild(bookDetailsDiv)
//     bookDetailsDiv.classList.add('col')
//     bookPages.appendChild(bookPages)
//     bookPagesValue.textContent = `Pages:`
//     console.log(`${book.pages}`)
//     bookPagesValue.classList.add('row')
//     bookDetailCard.appendChild(bookPagesReadValue)
//     bookPagesReadValue.textContent = `Pages read:`
//     console.log(`${book.pagesRead}`)
//     bookPagesReadValue.classList.add('row')
//     bookDetailCard.appendChild(bookRatingValue)
//     bookRatingValue.textContent = `Book Rating:`
//     console.log(`${book.rating}`)
//     bookRatingValue.classList.add('row')
//     bookDetailCard.appendChild(bookSummaryValue)
//     bookSummaryValue.textContent = `This is a summary`
//     console.log(`${book.title}`)
//     bookSummaryValue.classList.add('row')


//     // Inputs
//     // bookDetailCard.appendChild(bookDetailsDiv)
//     // bookDetailsDiv.classList.add('col')
//     bookDetailCard.appendChild(bookPagesValueInput)
//     bookPages.classList.add('row')
//     bookDetailCard.appendChild(bookPagesReadValueInput)
//     bookPagesReadValue.classList.add('row')
//     bookDetailCard.appendChild(bookRatingValueInput)
//     bookRatingValue.classList.add('row')
//     bookDetailCard.appendChild(bookSummaryValueInput)
//     bookSummaryValue.classList.add('row')


//     // Btns
//     bookDetailCard.appendChild(btnDiv)
//     btnDiv.setAttribute('id', 'btnDiv')
//     btnDiv.classList.add('row')
//     btnDiv.appendChild(completedBtn)
//     completedBtn.textContent = 'Book Complete'
//     completedBtn.classList.add('btn', 'col', 'btn-success')
//     btnDiv.appendChild(editdBtn)
//     editdBtn.textContent = 'Edit Details'
//     editdBtn.classList.add('btn', 'col', 'btn-secondary')
//     btnDiv.appendChild(deletedBtn)
//     deletedBtn.textContent = 'Delete Book'
//     deletedBtn.classList.add('btn', 'col', 'btn-danger')

}

function createBookDetailsCard() {

}

function listenForEditClick() {

}

function listenForDeleteClick() {

}

function updateThisBook() {

}
