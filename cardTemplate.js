import { LIBRARY } from "./constants.js"

export class BookCard {
    constructor(book) {
        this.book = book
        this.bookId = book.id
        this.target = `collapseBook${book.id}`
        this.targetHeading = `heading${book.id}`

        
        this.template = `
        <div class="accordion-item book">
            <button id="${book.id}" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-${this.target}" aria-expanded="false" aria-controls="flush-${this.target}">
            <h4 class="accordion-header h3" data-toggle="collapse" href="#collapse1">
                    <p class="h3">${book.title}</p>
                    <p class="h6">${book.author}</p>
                </h4>    
            </button>    
            </div>
        <div id="flush-${this.target}" class="accordion-collapse collapse" aria-labelledby="flush-${this.targetHeading}" data-bs-parent="#flush-${this.target}">    
        <div class=" row">
                <div class="col-sm-3">Pages:</div>
                <div class="col-sm">${book.pages}</div>
                </div>
            <div class=" row">    
            <div class="col-sm-3">Pages read:</div>
                <div class="col-sm">${book.pagesRead}</div>
                </div>
                <div class=" row">
                <div class="col-sm-3">Rating:</div>
                <div class="col-sm">${book.rating}</div>
                </div>
                <div class=" row">
                <div class="col-sm-3">completed:</div>
                <div class="col-sm">${book.complete}</div>
                </div>
                <div class=" col">
                <div class="col-sm-3">Summary:</div>
                <div class="col-sm">${book.summary}</div>
                </div>
                <div container-fluid row>
                <button type="button" id="completeBtn${book.id}" class="btn btn-success">Complete</button>
                <button type="button" id="editBtn${book.id}" class="btn btn-warning">Edit</button>
                <button type="button" id="deleteBtn${book.id}" class="btn btn-danger">Delete</button>
                </div>
                </div>
        `
    }

    generateCard() {
        const accordion = document.createElement('div')
        accordion.classList.add('accordion', 'accordion-flush', 'book')
        accordion.innerHTML = this.template
        accordion.setAttribute('id', `${this.bookId}`)

        LIBRARY.bookCase.appendChild(accordion)
    }
}
