// EventListeners


//     // Listen for book card clicks    
// export function listenForBookClicks() {
//         ALL.accordianBtns.forEach( (el) => {
//             el.addEventListener('mouseover', () => {
//                 console.log(e.target.id)})
//             el.addEventListener('click', (e) => {
//                 let bookId = e.target.id
//                 let key = `ID${bookId}`
//                 ALL.buttons.forEach( (btn) => {
//                     btn.addEventListener('click', (e) => {
//                         let btnClickedId = e.target.id
//                         switch (`${btnClickedId}`) {
//                             case `completeBtn${bookId}`:
//                                 // bookComplete(key)
//                                 console.log('complete button clicked')
//                                 break;
//                             case `editBtn${bookId}`:
//                                 // handleEditBtnClick(key)
//                                 console.log('edit button clicked')
//                                 break;
//                             case `deleteBtn${bookId}`:
//                                 // deleteBook(key)
//                                 console.log(`delete button has been clicked`)
//                                 break;
//                             default:
//                                 break;
//                         }
    
//                     })
    
//                 })
//             })
//         })
//     }



// main

// // This is called in the eventListener module
// function fillInputFields (bookId){
//     USER_INPUTS.title.value = myLibrary[bookId].title
//     USER_INPUTS.author.value = myLibrary[bookId].author 
//     USER_INPUTS.pages.value = myLibrary[bookId].pages
//     USER_INPUTS.pagesRead.value = myLibrary[bookId].pagesRead
//     USER_INPUTS.rating.value = myLibrary[bookId].rating
//     USER_INPUTS.summary.value = myLibrary[bookId].summary
// }


// function hideAddBookBtn () {
//     addBookButton.style.display = 'none'
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