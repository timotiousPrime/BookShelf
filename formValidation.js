import { BUTTONS } from "./constants.js"

export function validateBookEntry (isNewEntry) {
    if (USER_INPUTS.title.value === '' ||
        USER_INPUTS.author.value === '' || 
        USER_INPUTS.pages.value < 0 || 
        USER_INPUTS.pagesRead.value < 0) {
            console.log('invalid')
            if (isNewEntry) {
                disableAddBookBtn()
            }
            else {
                disableupdateBtn()   
            }
        }
}    


function disableAddBookBtn () {
    BUTTONS.addBook.setAttribute('disabled')
}

function disableupdateBtn () {
    BUTTONS.update.setAttribute('disabled')
}    
