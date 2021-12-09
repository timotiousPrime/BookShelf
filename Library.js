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
    lib: {},

    addBook: (book) => {
        myLib.lib = {
            ...myLib.lib,
            [`ID${book.id}`]: {...book}}
    },

    loadLibrary: (obj) => {
        myLib.lib = {...obj}
    },

    getLocallySavedBooks(){
        if (localStorage.theLibrary) return JSON.parse(localStorage.localLibrary)
    },

    saveBooksToLocalStorage: () => {
        localStorage.setItem('localLibrary', JSON.stringify(myLib.lib))
    },

    clearBooks: () => {
        myLib.lib = {}
        localStorage.clear()
    },

    removeBook: (id) => {
        myLib.books = myLib.books.filter(book => book.id !== id)
        delete myLib.lib[`ID${id}`]
    },

    displayBooks: () => {
        let keys = Object.keys(myLib.lib)
   
        ALL.bookCards.forEach(removeCard);

        keys.forEach( (key) => {
            let bookCard = new bookCard(myLib.lib[key])
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
