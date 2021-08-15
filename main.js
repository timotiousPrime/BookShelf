let myLibrary = {}

function BOOK (title, author, pages, pagesRead, completed, rating, summary, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pagesRead = pagesRead
    this.completed = completed
    this.rating = rating
    this.summary = summary
    this.id = id
}

let newBookCard = (id, title, author, pages, pagesRead, complete, rating, summary) => {
    let target = `collapseBook${id}`
    let targetHeading = `heading${id}`
    
    let template = `
    <div class="accordian-item book">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-${target}" aria-expanded="false" aria-controls="flush-${target}">
            <h4 class="accordian-header h3" data-toggle="collapse" href="#collapse1">
                    <p class="h3">${title}</p>
                    <p class="h6">${author}</p>
                </h4>
            </button>
            </div>
        <div id="flush-${target}" class="accordion-collapse collapse" aria-labelledby="flush-${targetHeading}" data-bs-parent="#flush-${target}">
        <div class=" row">
                <div class="col-sm-3">Pages:</div>
                <div class="col-sm">${pages}</div>
                </div>
            <div class=" row">
            <div class="col-sm-3">Pages read:</div>
                <div class="col-sm">${pagesRead}</div>
                </div>
                <div class=" row">
                <div class="col-sm-3">Rating:</div>
                <div class="col-sm">${rating}</div>
                </div>
                <div class=" row">
                <div class="col-sm-3">completed:</div>
                <div class="col-sm">${complete}</div>
                </div>
                <div class=" col">
                <div class="col-sm-3">Summary:</div>
                <div class="col-sm">${summary}</div>
                </div>
                <div container-fluid row>
                <button type="button" id="completeBtn" class="btn btn-success">Complete</button>
                <button type="button" id="editBtn" class="btn btn-warning">Edit</button>
                <button type="button" id="deleteBtn" class="btn btn-danger">Delete</button>
                </div>
                </div>
    `
    
    const accordian = document.createElement('div')
    accordian.classList.add('accordian', 'accordian-flush', 'book')
    accordian.innerHTML = template
    accordian.setAttribute('id', `${id}`)
    
    bookCase.appendChild(accordian)
}

// User inputs from form
const titleInput = document.getElementById('title-input')
const authorInput = document.getElementById('author-input')
const pagesInput = document.getElementById('pages-input')
const pagesReadInput = document.getElementById('pages-read-input')
const completedInput = document.getElementById('completed-input')
const ratingInput = document.getElementById('rating-input')
const summaryInput = document.getElementById('summary-input')
const form = document.getElementById('form')
const bookCase = document.getElementById('book-case')

// Creates a new book using the info from the form inputs
const createNewBook = () => {
    let bookId = getNextBookId(myLibrary)
    
    completedInput.checked ? pagesReadInput.value = pagesInput.value : console.log('finish the damn book')
    
    return new BOOK (titleInput.value, authorInput.value, pagesInput.value, pagesReadInput.value, completedInput.checked, ratingInput.value, summaryInput.value, bookId)
}    

// check for saved library in LocalStorage
window.addEventListener('load', () => {
    console.log('page has loaded')
    !localStorage.theLibrary ? console.log('there are no books saved yet') : updateMyLibrary(), displayMyLibrary(), console.log('myLibrary on window load'), console.log(myLibrary) 
})


const updateMyLibrary = () => {
    myLibrary = unpackTheLibrary()
}

const getNextBookId = (library) => {
    return Object.keys(library).length +1
}

const unpackTheLibrary = () => {
    const library = JSON.parse(localStorage.theLibrary)
    return library
}

const addNewBookToLibrary = (book) => {    
    myLibrary = {
        ...myLibrary,
        [`ID${book.id}`]: {...book}
    }
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

const displayMyLibrary = () => {
    let keys = Object.keys(myLibrary)
    
    const newBookCards = document.querySelectorAll('.book');
    newBookCards.forEach(removeCard);

    keys.forEach( (key) => {
        newBookCard(myLibrary[key].id, myLibrary[key].title, myLibrary[key].author, myLibrary[key].pages, myLibrary[key].pagesRead, myLibrary[key].completed, myLibrary[key].rating, myLibrary[key].summary)
    })
}

const handleAddBookClick = () => {
    addNewBookToLibrary(createNewBook())
    form.reset()
    saveLibrary(myLibrary)
    displayMyLibrary()
    // listenForMouseEventsOnBooks()
}

const addBookButton = document.getElementById('addBookButton')
addBookButton.addEventListener('click', handleAddBookClick)

// listenForMouseEventsOnBooks()

// function mouseOver () {
//     console.log(this)
//     this.classList.add('bg-info')
// }

// function mouseOut () {
//     console.log('bye')
//     this.classList.remove('bg-info')
// }

// function showBook (book) {
//     openBookDetails(book)
// }

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

listenForMouseEventsOnAccordianBtns()

function listenForMouseEventsOnAccordianBtns() {

    const accordianEls = document.querySelectorAll('.book')
    accordianEls.forEach( accordian => {
        accordian.addEventListener('click', (e) => {
            console.log(e)
        })
    })
}

const logBtn = () => {
    console.log(e)
}

function listenForEditClick() {

}

function listenForDeleteClick() {

}

function updateThisBook() {

}
