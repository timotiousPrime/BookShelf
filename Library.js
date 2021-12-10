import { ALL } from "./constants.js"
import { BookCard } from "./cardTemplate.js"
import { listenForBookClicks } from "./eventListeners.js"

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
    books: [],

    addBook: (book) => {

        myLib.books.push(book)
        
        myLib.lib = {
            ...myLib.lib,
            [`ID${book.id}`]: {...book}
        }
        console.log(myLib.lib)

    },

    loadLibrary: () => {
        if (localStorage.localLibrary) {
            myLib.lib = JSON.parse(localStorage.localLibrary)
            console.log('my lib has been loaded')
            console.log(myLib.lib)
        } else {
            localStorage.setItem('localLibrary', JSON.stringify(myLib.lib))
        }

        myLib.books = Object.values(myLib.lib)
    },

    getLocallySavedBooks(){
        return JSON.parse(localStorage.localLibrary)
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

        console.log(JSON.stringify(myLib.lib))
        console.log(JSON.stringify(myLib.books))
        if (myLib.books.length > 0) {
            console.log(myLib.books[0].id)
            }
        console.log(myLib.lib)
        


        // console.log('displaying books')
        // let keys = Object.keys(myLib.lib)
   
        // console.log(ALL.bookCards)

        // Array.from(ALL.bookCards).forEach(card => {
        //     console.log(card)})         
        // // ALL.bookCards.forEach(removeCard);
        // ALL.bookCards.forEach( (card) => {
        //     console.log(card)})

        // keys.forEach( (key) => {
        //     let bookCard = new BookCard(myLib.lib[key])
        //     bookCard.generateCard()
        // })    

        // listenForBookClicks()
    }

}

function removeCard(item) {
    console.log("trying to remove bookcards")
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
