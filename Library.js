import { ALL, LIBRARY } from "./constants.js"
import { Book } from "./book.js"
import { BookCard } from "./cardTemplate.js"
import { listenForUpdates } from "./eventListeners.js"
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

    getBook: (id) => {
        return myLib.books.find(book => book.id === id)
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
        myLib.books.splice(id, 1)
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
            listenForUpdates()
        })
    }

}
