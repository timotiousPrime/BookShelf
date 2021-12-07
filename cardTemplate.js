class BookCard {
    constructor(book) {
        this.book = book
        this.target = `collapseBook${book.id}`
        this.targetHeading = `heading${book.id}`
        
        this.template = `
        <div class="accordion-item book">
            <button id="${book.id}" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-${target}" aria-expanded="false" aria-controls="flush-${target}">
            <h4 class="accordion-header h3" data-toggle="collapse" href="#collapse1">
                    <p class="h3">${book.title}</p>
                    <p class="h6">${book.author}</p>
                </h4>    
            </button>    
            </div>
        <div id="flush-${target}" class="accordion-collapse collapse" aria-labelledby="flush-${targetHeading}" data-bs-parent="#flush-${target}">    
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

    generateCard(bookCase) {
        const accordion = document.createElement('div')
        accordion.classList.add('accordion', 'accordion-flush', 'book')
        accordion.innerHTML = template
        accordion.setAttribute('id', `${book.id}`)

        bookCase.appendChild(accordion)
    }
}

// let newBookCard = (id, title, author, pages, pagesRead, complete, rating, summary) => {
//     let target = `collapseBook${id}`
//     let targetHeading = `heading${id}`
    
//     let template = `
//     <div class="accordion-item book">
//             <button id="${id}" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-${target}" aria-expanded="false" aria-controls="flush-${target}">
//             <h4 class="accordion-header h3" data-toggle="collapse" href="#collapse1">
//                     <p class="h3">${title}</p>
//                     <p class="h6">${author}</p>
//                 </h4>    
//             </button>    
//             </div>
//         <div id="flush-${target}" class="accordion-collapse collapse" aria-labelledby="flush-${targetHeading}" data-bs-parent="#flush-${target}">    
//         <div class=" row">
//                 <div class="col-sm-3">Pages:</div>
//                 <div class="col-sm">${pages}</div>
//                 </div>
//             <div class=" row">    
//             <div class="col-sm-3">Pages read:</div>
//                 <div class="col-sm">${pagesRead}</div>
//                 </div>
//                 <div class=" row">
//                 <div class="col-sm-3">Rating:</div>
//                 <div class="col-sm">${rating}</div>
//                 </div>
//                 <div class=" row">
//                 <div class="col-sm-3">completed:</div>
//                 <div class="col-sm">${complete}</div>
//                 </div>
//                 <div class=" col">
//                 <div class="col-sm-3">Summary:</div>
//                 <div class="col-sm">${summary}</div>
//                 </div>
//                 <div container-fluid row>
//                 <button type="button" id="completeBtn${id}" class="btn btn-success">Complete</button>
//                 <button type="button" id="editBtn${id}" class="btn btn-warning">Edit</button>
//                 <button type="button" id="deleteBtn${id}" class="btn btn-danger">Delete</button>
//                 </div>
//                 </div>
//     `            
    
//     const accordion = document.createElement('div')
//     accordion.classList.add('accordion', 'accordion-flush', 'book')
//     accordion.innerHTML = template
//     accordion.setAttribute('id', `${book.id}`)
    
//     bookCase.appendChild(accordion)
// }    