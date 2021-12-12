import { ALL } from "./constants.js"
import { BookCard } from "./cardTemplate.js"
import { listenForBookClicks } from "./eventListeners.js"

// // Instantiate Libray
// export let myLibrary = {}

// // Get library from local storage
// const pullLibraryFromLS = () => {
//     myLibrary = JSON.parse(localStorage.theLibrary)
// }


// const addNewBookToLibrary = (book) => {    
//     myLibrary = {
//         ...myLibrary,
//         [`ID${book.id}`]: {...book}
//     }    
// }    

export let myLib = {
    lib: {},
    books: [
        {_title: "The Hobbit", _author: "J.R.R. Tolkien", pages: 300, completed: false, id: 1},
        {_title: "The Lord of the Rings", _author: "J.R.R. Tolkien", pages: 300, completed: false, id: 2},
    ],

    addBook: (book) => {
        myLib.books.push(book)
    },

    loadLibrary: () => {
        if (localStorage.localLibrary) {
            myLib.books = JSON.parse(localStorage.localLibrary)
            console.log('my lib has been loaded')
        } else {
            localStorage.setItem('localLibrary', JSON.stringify(myLib.books))
        }
    },

    getLocallySavedBooks(){
        return JSON.parse(localStorage.localLibrary)
    },

    saveBooksToLocalStorage: () => {
        localStorage.setItem('localLibrary', JSON.stringify(myLib.books))
    },

    clearBooks: () => {
        myLib.books = {}
        localStorage.clear()
    },

    removeBook: (id) => {
        myLib.books = myLib.books.filter(book => book.id !== id)
        delete myLib.lib[`ID${id}`]
    },

    displayBooks: () => {

        // remove all existing book cards
        ALL.bookCards.forEach( book => {
            console.log(book.remove())
            // remove event listeners
            book.removeEventListener('click', listenForBookClicks)
        })

        // log what datastructure myLib.books is
        myLib.books.map( book => {
            const bookCard = new BookCard(book)
            console.log(book._title)
            bookCard.generateCard(book)
            // listenForBookClicks(bookCard)
        })
    }

}

// const saveLibrary = (library) => {
//     localStorage.setItem('theLibrary', JSON.stringify(library))
// }    

// const clearStoredLibrary = () => {
//     localStorage.clear()
// }    


// function removeCard (item) {
//     item.remove();
// }    

// const displayMyLibrary = () => {
//     let keys = Object.keys(myLibrary)
    
//     ALL.bookCards.forEach(removeCard);

//     keys.forEach( (key) => {
//         newBookCard(myLibrary[key])
//     })    

//     listenForBookClicks()
// }    
