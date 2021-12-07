import {BUTTONS, USER_INPUTS, LIBRARY} from './constants.js'

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
// TODO: Create a class for this
// TODO: Replace with class from module
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
// TODO: Replace with class from module
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
    
    LIBRARY.bookCase.appendChild(accordion)
}    

function disableAddBookBtn () {
    addBookButton.setAttribute('disabled')
}    

function validateBookEntry () {
    if (USER_INPUTS.title.value === '' || USER_INPUTS.author.value === '' || 
        USER_INPUTS.pages.value < 0 || USER_INPUTS.pagesRead.value < 0) {
            console.log('invalid')
        disableAddBookBtn()    
        
        }
}        

// Creates a new book using the info from the form inputs
const createNewBook = () => {
    let bookId = getNextBookId(myLibrary)

    validateBookEntry ()    

    USER_INPUTS.completed.checked ? USER_INPUTS.pagesRead.value = USER_INPUTS.pages.value : console.log('finish the damn book')
    
    return new BOOK (USER_INPUTS.title.value, USER_INPUTS.author.value, USER_INPUTS.pages.value, USER_INPUTS.pagesRead.value, USER_INPUTS.completed.checked, USER_INPUTS.rating.value, USER_INPUTS.summary.value, bookId)
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
    USER_INPUTS.form.reset()
    saveLibrary(myLibrary)
    displayMyLibrary()
}    

// TODO: Update to use constants
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

function bookComplete(key) {
    myLibrary[key].pagesRead = myLibrary[key].pages
    saveLibrary(myLibrary)
    displayMyLibrary()
}    

function deleteBook(key) {
    delete myLibrary[key]
    updateLibraryKeys(myLibrary)
    saveLibrary(myLibrary)
    displayMyLibrary()
}    

function editBook(key) {
    USER_INPUTS.title.value = myLibrary[key].title
    USER_INPUTS.author.value = myLibrary[key].author 
    USER_INPUTS.pages.value = myLibrary[key]. pages
    USER_INPUTS.pagesRead.value = myLibrary[key].pagesRead
    // USER_INPUTS.completed.value = myLibrary[key]. 
    USER_INPUTS.rating.value = myLibrary[key].rating
    USER_INPUTS.summary.value = myLibrary[key].summary

    hideAddBookBtn ()
    makeUpdateBtn()
    overlayBookShelf ()
    listenForEditClicks(key)
    
}    

function cancelUpdate(){
    // TODO: Update to use constants
    const updateBtn = document.getElementById('updateBtn')
    const cancelBtn = document.getElementById('cancelBtn')
    const overlay = document.getElementById('overlayDiv')

    USER_INPUTS.form.reset()
    addBookButton.style.display = ''

    updateBtn.remove()
    cancelBtn.remove()
    overlay.remove()
}    

function disableupdateBtn () {
    // TODO: Update to use constants
    const updateBtn = document.getElementById(updateBtn)
    updateBtn.setAttribute('disabled')
}    
function validateEditEntry () {
    if (USER_INPUTS.title.value === '' || USER_INPUTS.author.value === '' ||
        USER_INPUTS.pages.value < 0 || USER_INPUTS.pagesRead.value < 0) {
            console.log('invalid')
            disableupdateBtn()
            
        }
}

// TODO: Update using book class methods
function updateBook(key) {
    myLibrary[key].title = USER_INPUTS.title.value
    myLibrary[key].author = USER_INPUTS.author.value
    myLibrary[key].pages = USER_INPUTS.pages.value
    myLibrary[key].pagesRead = USER_INPUTS.pagesRead.value
    myLibrary[key].complete = USER_INPUTS.completed.value
    myLibrary[key].rating = USER_INPUTS.rating.value
    myLibrary[key].summary = USER_INPUTS.summary.value

    validateEditEntry ()

    if (USER_INPUTS.completed.checked) {
        myLibrary[key].pagesRead = myLibrary[key].pages
     }

     if(myLibrary[key].pagesRead === myLibrary[key].pages) {
        myLibrary[key].completed = true
     } else {
        myLibrary[key].completed = false
     }

    saveLibrary(myLibrary)
    displayMyLibrary()
    cancelUpdate()

}

// TODO: Add to event listener module
function listenForEditClicks (id) {
    // TODO: Update to use constants
    const updateBtn = document.getElementById('updateBtn')
    const cancelBtn = document.getElementById('cancelBtn')

    updateBtn.addEventListener('click', () => {
        updateBook(id)
    })

    cancelBtn.addEventListener('click', (cancelUpdate))
}

function overlayBookShelf () {
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    overlay.setAttribute('id', 'overlayDiv')

    // TODO: Update to use constants 
    const librarySection = document.getElementById('library-section')
    librarySection.appendChild(overlay)
}

function hideAddBookBtn () {
    addBookButton.style.display = 'none'
}

// TODO: Create module for this component
function makeUpdateBtn() {
    const btnDiv = document.querySelector('.d-grid')
    const updateBtn = document.createElement('button')

    btnDiv.classList.add('gap-2')

    updateBtn.setAttribute('id', 'updateBtn')
    updateBtn.textContent = 'Update Book'
    updateBtn.setAttribute('type', 'submit')
    updateBtn.classList.add('btn', 'btn-success', 'btn-lg')
    
    const cancelBtn = document.createElement('button')
    cancelBtn.setAttribute('id', 'cancelBtn')
    cancelBtn.textContent = 'Cancel'
    cancelBtn.setAttribute('type', 'button')
    cancelBtn.classList.add('btn', 'btn-danger', 'btn-lg')

    btnDiv.appendChild(updateBtn)
    btnDiv.appendChild(cancelBtn)
}

// TODO: Create Module for event listeners
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
                            bookComplete(key)
                            break;
                        case `editBtn${bookId}`:
                            editBook(key)
                            break;
                        case `deleteBtn${bookId}`:
                            deleteBook(key)
                            break;
                        default:
                            break;
                    }

                })

            })
        })
    })
}
