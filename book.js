import  { USER_INPUTS } from './constants.js';
import { myLib } from './Library.js';
export class Book {

    static bookIdCounter = 0;
    static generateID() {return ++Book.bookIdCounter;}
    
        static updateBookIdCounter() {



            // console.log(JSON.parse(localStorage))
            
            if (myLib.books.length > 0) {
                
                let lastId = 0;

                myLib.books.forEach(book => {
                    lastId = Math.max(lastId, book.id);
                    console.log(book.id)
                });

                localStorage.setItem('IdCounter', lastId);  
            }

            console.log(Book.bookIdCounter);
        }

    completed = false;
    pages = 0;
    pagesRead = 0;
    rating = 3;
    summary = '';
    id = Book.generateID();

    constructor(title, author, pages, pagesRead, completed, rating, summary) {
        this._title = title;
        this._author = author;
        this.pages = pages;
        this.pagesRead = pagesRead;
        this.completed = completed;
        this.rating = rating;
        this.summary = summary;
    }

    __toString() {
        return `${this._title} by ${this._author}`;
    }

    get title() {
        return this._title;
    }

    setTitle(value) {
        this._title = value;
    }

    get author() {
        return this._author;
    }

    setAuthor(value) {
        this._author = value;
    }

    get pages() {
        return this.pages;
    }

    setPages(value) {
        this.pages = value;
    }

    get pagesRead() {
        return this.pagesRead;
    }

    setPagesRead(value) {
        this.pagesRead = value;
    }

    get completed() {
        return this.completed;
    }

    setcompleted() {
        this.completed = true;
        this.pagesRead = this.pages;
    }

    notCompleted() {
        this.completed = false;
        this.pagesRead = 0;
    }

    get rating() {
        return this.rating;
    }

    setRating(value) {
        this.rating = value;
    }

    get summary() {
        return this.summary;
    }

    setSummary(value) {
        this.summary = value;
    }

    get id() {
        return this.id;
    }

    setId(value) {
        this.id = value;
    }

}