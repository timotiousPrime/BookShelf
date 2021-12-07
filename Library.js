// Instantiate Libray
export let myLibrary = {}

// Get library from local storage
const pullLibraryFromLS = () => {
    myLibrary = JSON.parse(localStorage.theLibrary)
}


const addNewBookToLibrary = (book) => {    
    myLibrary = {
        ...myLibrary,
        [`ID${book.id}`]: {...book}
    }    
}    

const saveLibrary = (library) => {
    localStorage.setItem('theLibrary', JSON.stringify(library))
}    

const clearStoredLibrary = () => {
    localStorage.clear()
}    


function removeCard (item) {
    item.remove();
}    

const displayMyLibrary = () => {
    let keys = Object.keys(myLibrary)
    
    const newBookCards = document.querySelectorAll('.book');
    newBookCards.forEach(removeCard);

    keys.forEach( (key) => {
        newBookCard(myLibrary[key].id, myLibrary[key].title, myLibrary[key].author, myLibrary[key].pages, myLibrary[key].pagesRead, myLibrary[key].completed, myLibrary[key].rating, myLibrary[key].summary)
    })    

    listenForBookClicks()
}    


const myLib = {
    books: [],
    lib: {},

    pullBooksfromLS: () => {
        books = JSON.parse(localStorage.theLibrary)
        lib = JSON.parse(localStorage.theLibrary)
        
    }

}