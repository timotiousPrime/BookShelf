import { Book } from './book.js';
import { BUTTONS, USER_INPUTS, LIBRARY } from './constants.js';
import { validateBookEntry } from './formValidation.js';
import { myLib } from './Library.js';
import { makeUpdateBtn } from './makeUpdateBtn.js'


// Handle all the eventListeners
export function handleEvents() {
    
    // check for saved library in LocalStorage
    window.addEventListener('load', () => {
        console.log('page has loaded')
        myLib.loadLibrary()
        Book.updateBookIdCounter()
        myLib.displayBooks()

        // listenForUpdates()

    })

    // Listen for add book button click
    BUTTONS.addBook.addEventListener('click', handleAddBookClick)
    



    // Handle the update book button click
    // handleUpdateBtnClick()
    
    // // Handle the cancel update button click
    // handleCancelBtnClick()
    
    // // Handle the delete book button click
    // handleDeleteBtnClick()
    
    // Handle the edit book button click
    // handleEditBtnClick()
    
    // // Handle the complete book button click
    // handleCompleteBtnClick()
    
    // // Handle the accordian button click
    // listenForBookClicks()

}


function updatePagesRead(isCompleted){
    if (isCompleted) {
        USER_INPUTS.pagesRead.value = USER_INPUTS.pages.value
    }
}

// Handle the add book button click
function handleAddBookClick () {
    // validate form
    validateBookEntry()
    // create book
    let book = new Book(USER_INPUTS.title.value, USER_INPUTS.author.value, USER_INPUTS.pages.value, USER_INPUTS.pagesRead.value, USER_INPUTS.completed.checked, USER_INPUTS.rating.value, USER_INPUTS.summary.value)
    // check if book is complete
    updatePagesRead(USER_INPUTS.completed.checked)
    // add book to myLibrary
    myLib.addBook(book)
    // update Local Storage
    myLib.saveBooksToLocalStorage()
    // render myLibrary
    myLib.displayBooks()
    // clear form
    USER_INPUTS.form.reset()
    console.log("new book has been successfully added")
    // Update book ID counter
    Book.updateBookIdCounter()
    // Listen for clicks on books in library
    // listenForUpdates()
}    

// Handle the edit button click
function handleEditBtnClick(id){

    const book = myLib.getBook(id)

    console.log('handleEditBtnClick function called')
    // Add books info to form
    fillInputFields (book)
    // hide Add book Button
    hideAddBookBtn ()
    // Add update button
    makeUpdateBtn()
    // Add cancel button
    // Display overlay over book section
    overlayBookShelf ()
    // Add event listener to update button
    handleUpdateBtnClick(book)
    // Add event listener to cancel button
    handleCancelBtnClick(book)
}

function fillInputFields (book) {
    USER_INPUTS.title.value = book._title
    USER_INPUTS.author.value = book._author 
    USER_INPUTS.pages.value = book.pages
    USER_INPUTS.pagesRead.value = book.pagesRead
    USER_INPUTS.rating.value = book.rating
    USER_INPUTS.summary.value = book.summary
}

function hideAddBookBtn () {
        addBookButton.style.display = 'none'
}

function overlayBookShelf () {

    console.log('overlayBookShelf function called sdfhsdfbsfdgbsf')
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    overlay.setAttribute('id', 'overlayDiv')

    LIBRARY.librarySection.appendChild(overlay)
}

function handleUpdateBtnClick(id) {
    // listenForUpdate()
    const updateBtn = document.getElementById('updateBtn')

    updateBtn.addEventListener('click', () => {updateBook(id)
    })
}

// Handle update button click
    // validate form
    // update book with form info
    // check if book is complete
    // update LS
    // render myLibrary
    // clear form
    // close overlay
    // remove event listener from update button
    // remove event listener from cancel button
    
// // Handle cancel button click  
//     // remove overlay
//     BUTTONS.overlay.remove()
//     // clear form
//     USER_INPUTS.form.reset()
//     // Display add book button
//     BUTTONS.addBook.style.display = ''
//     // remove event listener from update button
//     // remove event listener from cancel button
//     // remove update button
//     BUTTONS.update.remove()
//     // remove cancel button
//     BUTTONS.cancel.remove()




function handleCancelBtnClick() {
    BUTTONS.cancel.addEventListener('click', (cancelUpdate))
}

export function listenForUpdates(){
    console.log('listening for updates')

    const btns = document.querySelectorAll('.btn')

    Array.from(btns).forEach( ele => {
        ele.addEventListener('click', e => {
            let id 
            switch (e.target.innerText) {
                case 'Complete':
                    id = e.target.id.slice(11)
                    break;
                case 'Edit':
                    id = parseInt(e.target.id.slice(7))
                    // console.log(id)
                    console.log('edit button clicked')
                    handleEditBtnClick(id)
                    break;
                case 'Delete':
                    id = parseInt(e.target.id.slice(9))
                    // console.log(e)
                    myLib.removeBook(id)
                    myLib.saveBooksToLocalStorage()
                    myLib.displayBooks()
                    break;
                default:
                    break;
            }
        })
    })
}



function updateBook(book) {

    console.log('updating book')

    console.log(book)

    book.setTitle(USER_INPUTS.title.value)
    book.setAuthor(USER_INPUTS.author.value)
    book.setPages(USER_INPUTS.pages.value)
    book.setPagesRead(USER_INPUTS.pagesRead.value)
    book.setCompleted(USER_INPUTS.completed.checked)
    book.setRating(USER_INPUTS.rating.value)
    book.setSummary(USER_INPUTS.summary.value)

    validateBookEntry(false)

    if (USER_INPUTS.completed.checked) {
        book.pagesRead = book.pages
     }

     if(book.pagesRead === book.pages) {
        book.completed = true
     } else {
        book.completed = false
     }

    saveLibrary(myLibrary)
    displayMyLibrary()
    cancelUpdate()

}