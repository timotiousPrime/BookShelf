import { Book } from './book.js';
import { BUTTONS, USER_INPUTS } from './constants.js';
import { validateBookEntry } from './formValidation.js';
import { myLib } from './Library.js';


// Handle all the eventListeners
function handleEvents() {
    // Handle the add book button click
    BUTTONS.addBook.addEventListener('click', handleAddBookClick)
    // Handle the update book button click
    // handleUpdateBtnClick()
    // // Handle the cancel update button click
    // handleCancelBtnClick()
    // // Handle the delete book button click
    // handleDeleteBtnClick()
    // // Handle the edit book button click
    // handleEditBtnClick()
    // // Handle the complete book button click
    // handleCompleteBtnClick()
    // // Handle the accordian button click
    // listenForBookClicks()

}

// check for saved library in LocalStorage
window.addEventListener('load', () => {
    console.log('page has loaded')
    !localStorage.theLibrary ? console.log('there are no books saved yet') : 
    getStoredBooks (), 
    displayMyLibrary()
    // console.table(myLibrary) 
})

function updatePagesRead(isCompleted){
    if (isCompleted) {
        USER_INPUTS.pagesRead.value = USER_INPUTS.pages.value
    }
}

// Listen for add book button click
BUTTONS.addBook.addEventListener('click', handleAddBookClick)
// Handle the add book button click
const handleAddBookClick = () => {
    // validate form
    validateBookEntry()
    // create book
    let book = new Book(USER_INPUTS.title.value, USER_INPUTS.author.value, USER_INPUTS.pages.value, USER_INPUTS.pagesRead.value, USER_INPUTS.completed.checked, USER_INPUTS.rating.value, USER_INPUTS.summary.value)
    // check if book is complete
    updatePagesRead(USER_INPUTS.completed.checked)
    // add book to myLibrary
    myLib.addBook(book)
    // update Local Storage
    myLib.saveBooks()

    // render myLibrary
    myLib.displayBooks()
    // clear form
    USER_INPUTS.form.reset()
}    

// // Handle the edit button click
//     // Add books info to form
//     fillInputFields (key)
//     // hide Add book Button
//     hideAddBookBtn ()
//     // Add update button
//     makeUpdateBtn()
//     // Add cancel button
//     // Display overlay over book section
//     overlayBookShelf ()
//     // Add event listener to update button
//     handleUpdateBtnClick(id)
//     // Add event listener to cancel button
//     handleCancelBtnClick(id)

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




function handleUpdateBtnClick(id) {
    // listenForUpdate()
    BUTTONS.update.addEventListener('click', () => {updateBook(id)
    })
}

function handleCancelBtnClick() {
    BUTTONS.cancel.addEventListener('click', (cancelUpdate))
}

// TODO: Create Module for event listeners
function listenForBookClicks() {
    
    ALL.accordianBtns.forEach( (el) => {
        el.addEventListener('click', (e) => {
            let bookId = e.target.id
            let key = `ID${bookId}`
            ALL.buttons.forEach( (btn) => {
                btn.addEventListener('click', (e) => {
                    let btnClickedId = e.target.id
                    switch (`${btnClickedId}`) {
                        case `completeBtn${bookId}`:
                            bookComplete(key)
                            break;
                        case `editBtn${bookId}`:
                            handleEditBtnClick(key)
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

