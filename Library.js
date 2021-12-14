import { ALL, LIBRARY } from "./constants.js"
import { Book } from "./book.js"
import { BookCard } from "./cardTemplate.js"
// import { listenForBookClicks } from "./eventListeners.js"

export let myLib = {
    lib: {},
    books: [
        {_title: "The Hobbit", _author: "J.R.R. Tolkien", pages: 300, completed: false, id: 0},
        {_title: "The Lord of the Rings", _author: "J.R.R. Tolkien", pages: 300, completed: false, id: 1},
    ],

    addBook: (book) => {
        myLib.books.push(book)
    },

    loadLibrary: () => {
        if (localStorage.localLibrary) {
            console.log(JSON.parse(localStorage.localLibrary))
            myLib.books = JSON.parse(localStorage.localLibrary)
            console.log('my library has been loaded')
            Book.updateBookIdCounter()
        } else {
            localStorage.setItem('localLibrary', JSON.stringify(myLib.books))
        }
        console.log('Library: ', myLib.books)
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

        let bookCase = document.getElementById('book-case')

        if (bookCase.children.length > 0) {
            while (LIBRARY.bookCase.firstChild) {
                LIBRARY.bookCase.removeChild(bookCase.lastChild)
            }
        }

        // log what datastructure myLib.books is
        console.log(myLib.books)
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
