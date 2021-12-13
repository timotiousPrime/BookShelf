import { ALL } from "./constants.js"
import { Book } from "./book.js"
import { BookCard } from "./cardTemplate.js"
// import { listenForBookClicks } from "./eventListeners.js"

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
            let cards = bookCase.children

            for (let i = 0; i < cards.length; i++) {
                console.log(cards[i])
                cards[i].remove()
            }
            
            // console.log('clearing book cards')
            // console.log(bookCase.children.length)
            // myLib.books.forEach(book => {
            //     console.log(bookCase.children[book.id])
            //     console.log(typeof bookCase.children)
            //     let card = bookCase.children[book.id - 1]
            //     console.log(card)
            //     card.remove()
            // })
        }
        // const cards = Array.from(ALL.bookCards)
        // console.log(cards)
        // console.log(typeof cards)

        // // remove all existing book cards
        // cards.forEach( book => {
        //     console.log(book.remove())
        //     console.log(book)
        //     book.remove()
        //     // remove event listeners
        //     book.removeEventListener('click', listenForBookClicks)
        // })

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
