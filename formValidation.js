import { BUTTONS } from "./constants.js"

export function validateBookEntry () {
    if (USER_INPUTS.title.value === '' ||
        USER_INPUTS.author.value === '' || 
        USER_INPUTS.pages.value < 0 || 
        USER_INPUTS.pagesRead.value < 0) {
            console.log('invalid')
            disableAddBookBtn()    
        
        }
}    


function disableAddBookBtn () {
    BUTTONS.addBook.setAttribute('disabled')
}