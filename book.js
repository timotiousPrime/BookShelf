export class Book {

    static bookIdCounter = 0;
    static generateID() {return ++Book.bookIdCounter;}

    completed = false;
    pages = 0;
    pagesRead = 0;
    rating = 3;
    summary = '';
    id = Book.generateID();

    constructor(title, author, pages, pagesRead, completed, rating, summary) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.pagesRead = pagesRead;
        this.completed = completed;
        this.rating = rating;
        this.summary = summary;
        // this.id = id
    }

    get title() {
        return this.title;
    }

    setTitle(value) {
        this.title = value;
    }

    get author() {
        return this.author;
    }

    setAuthor(value) {
        this.author = value;
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