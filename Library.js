import { ALL, LIBRARY } from "./constants.js"
import { Book } from "./book.js"
import { BookCard } from "./cardTemplate.js"
import { listenForUpdates } from "./eventListeners.js"
// import { listenForBookClicks } from "./eventListeners.js"

export let myLib = {
    lib: {},
    books: [
        // {_title: "The Hobbit", _author: "J.R.R. Tolkien", pages: 300, completed: false, id: 0},
        // {_title: "The Lord of the Rings", _author: "J.R.R. Tolkien", pages: 300, completed: false, id: 1},
    ],

    addBook: (book) => {
        myLib.books.push(book)
    },

    getBook: (id) => {
        return myLib.books.find(book => book.id === id)
    },

    getBookIndex: (id) => {
        return myLib.books.findIndex(book => book.id === id)
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
        console.log('remove book with id: ', id)
        console.log(myLib.books)
        let bookIndex = myLib.getBookIndex(id)
        console.log('remove book with index: ', bookIndex)
        

        myLib.books.splice(bookIndex, 1)

        // myLib.books = myLib.books.filter(book => book.id !== id)
        console.log('my library: ', myLib.books)
    },

    displayBooks: () => {

        // remove all book DOM elements so that they can be re-rendered
        let bookCase = document.getElementById('book-case')

        if (bookCase.children.length > 0) {
            while (LIBRARY.bookCase.firstChild) {
                LIBRARY.bookCase.removeChild(bookCase.lastChild)
            }
        }

        // log what datastructure myLib.books is
        myLib.books.map( book => {
            const bookCard = new BookCard(book)
            console.log(book._title)
            bookCard.generateCard(book)
        })
        listenForUpdates()
    }

}
