import { BUTTONS } from './constants.js';

// Handle all the eventListeners


// check for saved library in LocalStorage
window.addEventListener('load', () => {
    console.log('page has loaded')
    !localStorage.theLibrary ? console.log('there are no books saved yet') : 
    getStoredBooks (), 
    displayMyLibrary()
    // console.table(myLibrary) 
})

// Listen for add book button click
BUTTONS.addBook.addEventListener('click', handleAddBookClick)
// Handle the add book button click
const handleAddBookClick = () => {
    // validate form
    // create book
    addNewBookToLibrary(createNewBook())
    // check if book is complete
    // assign an id to the book
    // add book to myLibrary
    saveLibrary(myLibrary)
    // update Local Storage
    // render myLibrary
    displayMyLibrary()
    // clear form
    USER_INPUTS.form.reset()
}    

// Handle the edit button click
    // Add books info to form
    // Add update button
    // Add cancel button
    // Display overlay over book section
    // Add event listener to update button
    handleUpdateBtnClick(id)
    // Add event listener to cancel button
    handleCancelBtnClick(id)

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
    
// Handle cancel button click  
    // remove overlay
    // clear form
    // remove event listener from update button
    // remove event listener from cancel button
    // remove update button
    // remove cancel button




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

