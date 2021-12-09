import { ALL } from "./constants.js"
import { BookCard } from "./cardTemplate.js"

// // Instantiate Libray
// export let myLibrary = {}

// Get library from local storage
const pullLibraryFromLS = () => {
    myLibrary = JSON.parse(localStorage.theLibrary)
}


// const addNewBookToLibrary = (book) => {    
//     myLibrary = {
//         ...myLibrary,
//         [`ID${book.id}`]: {...book}
//     }    
// }    

export let myLib = {
    books: [],
    lib: {},

    addBook: (book) => {
        this.books.push(book)
        this.lib = {
            ...this.lib,
            [`ID${book.id}`]: {...book}}
    },

    getLocallySavedBooks(){
        if (localStorage.theLibrary) return JSON.parse(localStorage.localLibrary)
    },

    saveBooksToLocalStorage: () => {
        localStorage.setItem('localLibrary', JSON.stringify(this.lib))
    },

    clearBooks: () => {
        this.lib = {}
        this.books = []
        localStorage.clear()
    },

    removeBook: (id) => {
        this.books = this.books.filter(book => book.id !== id)
        delete this.lib[`ID${id}`]
    },

    displayBooks: () => {
        let keys = Object.keys(this.lib)
   
        ALL.bookCards.forEach(removeCard);

        keys.forEach( (key) => {
            let bookCard = new bookCard(this.lib[key])
            bookCard.generateCard()
        })    

        listenForBookClicks()
    }

}

function removeCard(item) {
    item.remove()        
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
