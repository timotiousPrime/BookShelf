// import {BUTTONS, USER_INPUTS, LIBRARY, ALL} from './constants.js'
// import { Book } from './book.js'
// import { BookCard } from './cardTemplate.js'
// import { validateBookEntry } from './formValidation.js'
// // import { myLibrary } from './Library.js'
// import { makeUpdateBtn } from './makeUpdateBtn.js'
import { myLib } from './Library.js'
import { handleEvents } from './eventListeners.js'

// Handling myLibrary 

// let LocallyStoredBooks = JSON.parse(localStorage.theLibrary)

// let myLibrary = LocallyStoredBooks
// let myLib = getStoredBooks()

// console.log(myLibrary)

handleEvents()




























// let myLibrary = {}

// // check for saved library in LocalStorage
// window.addEventListener('load', () => {
//     console.log('page has loaded')
//     !localStorage.theLibrary ? console.log('there are no books saved yet') : 
//     // getStoredBooks (), 
//     displayMyLibrary()
//     // console.table(myLibrary) 
// })

// function getStoredBooks () {
//     return JSON.parse(localStorage.theLibrary)
// }

// console.log(getStoredBooks())

// function pullLibraryFromLS() {
//     return myLib
// }

// function getStoredBooks () {
//     myLibrary = JSON.parse(localStorage.theLibrary)
//     return myLibrary
// }
   

// // Creates a new book using the info from the form inputs
// const createNewBook = () => {
//     let bookId = getNextBookId(myLibrary)

//     validateBookEntry(true)    

//     USER_INPUTS.completed.checked ? USER_INPUTS.pagesRead.value = USER_INPUTS.pages.value : console.log('finish the damn book')
    
//     return new Book (USER_INPUTS.title.value, USER_INPUTS.author.value, USER_INPUTS.pages.value, USER_INPUTS.pagesRead.value, USER_INPUTS.completed.checked, USER_INPUTS.rating.value, USER_INPUTS.summary.value, bookId)
// }            

// function getNextBookId(library) {
//     return Object.keys(library).length + 1
// }    

// function addNewBookToLibrary(book) {    
//     myLibrary = {
//         ...myLibrary,
//         [`ID${book.id}`]: {...book}
//     }    
// }    

// const saveLibrary = (library) => {
//     localStorage.setItem('theLibrary', JSON.stringify(library))
// }    

// const clearStoredLibrary = () => {
//     localStorage.clear()
// }    


// export function removeCard (item) {
//     item.remove();
// }    

// const displayMyLibrary = () => {
//     let books = Object.keys(myLibrary)
    
//     ALL.bookCards.forEach(removeCard);

//     books.forEach( (book) => {
//         let bookCard = new BookCard(myLibrary[book])
//         bookCard.generateCard()
//     })    

//     listenForBookClicks()
// }    

// const handleAddBookClick = () => {
//     addNewBookToLibrary(createNewBook())
//     USER_INPUTS.form.reset()
//     saveLibrary(myLibrary)
//     displayMyLibrary()
// }    

// // TODO: Update to use constants
// const addBookButton = document.getElementById('addBookButton')
// addBookButton.addEventListener('click', handleAddBookClick)

// function updateLibraryKeys (library) {
//     let tempIdNum = 1 
    
//     let keys = Object.keys(library)
    
//     keys.forEach( (key) => {
//         library[tempIdNum] = library[key]
//         delete myLibrary[key]
//         library[`ID${tempIdNum}`] = library[tempIdNum]
//         library[`ID${tempIdNum}`].id = tempIdNum
//         delete myLibrary[tempIdNum]
//         tempIdNum++
//     })    
// }    

// function bookComplete(key) {
//     myLibrary[key].pagesRead = myLibrary[key].pages
//     saveLibrary(myLibrary)
//     displayMyLibrary()
// }    

// function deleteBook(key) {
//     delete myLibrary[key]
//     updateLibraryKeys(myLibrary)
//     saveLibrary(myLibrary)
//     displayMyLibrary()
// }    

// // This is called in the eventListener module
// function fillInputFields (bookId){
//     USER_INPUTS.title.value = myLibrary[bookId].title
//     USER_INPUTS.author.value = myLibrary[bookId].author 
//     USER_INPUTS.pages.value = myLibrary[bookId].pages
//     USER_INPUTS.pagesRead.value = myLibrary[bookId].pagesRead
//     USER_INPUTS.rating.value = myLibrary[bookId].rating
//     USER_INPUTS.summary.value = myLibrary[bookId].summary
// }

// function handleEditBtnClick(key) {
   
//     fillInputFields (key)
//     hideAddBookBtn ()
//     makeUpdateBtn()
//     overlayBookShelf ()
//     listenForUpdate(key)
    
// }    

// function cancelUpdate(){
    
//     USER_INPUTS.form.reset()

//     BUTTONS.addBook.style.display = ''

//     BUTTONS.update.remove()
//     BUTTONS.cancel.remove()
//     BUTTONS.overlay.remove()
// }    

// function updateBook(key) {

//     myLibrary[key].setTitle(USER_INPUTS.title.value)
//     myLibrary[key].setAuthor(USER_INPUTS.author.value)
//     myLibrary[key].setPages(USER_INPUTS.pages.value)
//     myLibrary[key].setPagesRead(USER_INPUTS.pagesRead.value)
//     myLibrary[key].setComplete(USER_INPUTS.completed.checked)
//     myLibrary[key].setRating(USER_INPUTS.rating.value)
//     myLibrary[key].setSummary(USER_INPUTS.summary.value)

//     validateBookEntry(false)

//     if (USER_INPUTS.completed.checked) {
//         myLibrary[key].pagesRead = myLibrary[key].pages
//      }

//      if(myLibrary[key].pagesRead === myLibrary[key].pages) {
//         myLibrary[key].completed = true
//      } else {
//         myLibrary[key].completed = false
//      }

//     saveLibrary(myLibrary)
//     displayMyLibrary()
//     cancelUpdate()

// }

// // TODO: Add to event listener module
// function listenForUpdate (id) {

//     BUTTONS.update.addEventListener('click', () => {
//         updateBook(id)
//     })

//     BUTTONS.cancel.addEventListener('click', (cancelUpdate))
// }

// function overlayBookShelf () {
//     const overlay = document.createElement('div')
//     overlay.classList.add('overlay')
//     overlay.setAttribute('id', 'overlayDiv')

//     LIBRARY.librarySection.appendChild(overlay)
// }

// function hideAddBookBtn () {
//     addBookButton.style.display = 'none'
// }

// // TODO: Create Module for event listeners
// function listenForBookClicks() {
    
//     ALL.accordianBtns.forEach( (el) => {
//         el.addEventListener('click', (e) => {
//             let bookId = e.target.id
//             let key = `ID${bookId}`
//             ALL.buttons.forEach( (btn) => {
//                 btn.addEventListener('click', (e) => {
//                     let btnClickedId = e.target.id
//                     switch (`${btnClickedId}`) {
//                         case `completeBtn${bookId}`:
//                             bookComplete(key)
//                             break;
//                         case `editBtn${bookId}`:
//                             handleEditBtnClick(key)
//                             break;
//                         case `deleteBtn${bookId}`:
//                             deleteBook(key)
//                             break;
//                         default:
//                             break;
//                     }

//                 })

//             })
//         })
//     })
// }
