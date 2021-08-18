// Handling myLibrary 

let myLibrary = {}

// check for saved library in LocalStorage
window.addEventListener('load', () => {
    console.log('page has loaded')
    !localStorage.theLibrary ? console.log('there are no books saved yet') : 
    pullLibraryFromLS(), 
    displayMyLibrary()
    // console.table(myLibrary) 
})

const pullLibraryFromLS = () => {
    myLibrary = JSON.parse(localStorage.theLibrary)
}

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
    <div class="accordion-item book">
            <button id="${id}" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-${target}" aria-expanded="false" aria-controls="flush-${target}">
            <h4 class="accordion-header h3" data-toggle="collapse" href="#collapse1">
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
                <button type="button" id="completeBtn${id}" class="btn btn-success">Complete</button>
                <button type="button" id="editBtn${id}" class="btn btn-warning">Edit</button>
                <button type="button" id="deleteBtn${id}" class="btn btn-danger">Delete</button>
                </div>
                </div>
    `            
    
    const accordion = document.createElement('div')
    accordion.classList.add('accordion', 'accordion-flush', 'book')
    accordion.innerHTML = template
    accordion.setAttribute('id', `${id}`)
    
    bookCase.appendChild(accordion)
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

const getNextBookId = (library) => {
    return Object.keys(library).length +1
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

    listenForBookClicks()
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

function updateLibraryKeys (library) {
    let tempIdNum = 1 
    
    let keys = Object.keys(library)
    
    keys.forEach( (key) => {
        library[tempIdNum] = library[key]
        delete myLibrary[key]
        library[`ID${tempIdNum}`] = library[tempIdNum]
        library[`ID${tempIdNum}`].id = tempIdNum
        delete myLibrary[tempIdNum]
        tempIdNum++
    })
}

// DRY this out and refactor
function listenForBookClicks() {
    
    const bookEls = document.querySelectorAll('.accordion-button')
    bookEls.forEach( (el) => {
        el.addEventListener('click', (e) => {
            let bookId = e.target.id
            let key = `ID${bookId}`
            const btnEls = document.querySelectorAll('.btn')
            btnEls.forEach( (btn) => {
                btn.addEventListener('click', (e) => {
                    let btnClickedId = e.target.id
                    switch (`${btnClickedId}`) {
                        case `completeBtn${bookId}`:
                            myLibrary[key].pagesRead = myLibrary[key].pages
                            saveLibrary(myLibrary)
                            displayMyLibrary()
                            break;
                        case `editBtn${bookId}`:
                            console.log('You clicked on edit')
                            break;
                        case `deleteBtn${bookId}`:
                            console.log('You clicked on delete')
                            console.log(bookId)
                            delete myLibrary[key]
                            console.log(`library after book deleted: ${myLibrary}`)
                            console.log(myLibrary)
                            updateLibraryKeys(myLibrary)
                            console.log(`library after key update: ${myLibrary}`)
                            console.log(myLibrary)
                            saveLibrary(myLibrary)
                            displayMyLibrary()
                            break;
                        default:
                            console.log(`You didn't click an appropriate btn`)
                            console.log(`${btnClickedId}${bookId}`)
                            break;
                    }

                })

            })

        })
    })
}
