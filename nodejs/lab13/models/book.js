let books = [];

module.exports = class Book {

    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {
        this.id = Math.random().toString();
        books.push(this);
        return this;
    }

    update() {
        const index = books.findIndex(b => b.id === this.id);
        if (index > -1) {
            books.splice(index, 1, this);
            return this;
        } else {
            throw new Error('NOT Found');
        }

    }

    static fetchAll() {
        return books;
    }

    static findById(bookId) {
        const index = books.findIndex(b => b.id === bookId);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error('NOT Found');
        }
    }

    static deleteById(bookId) {
        const index = books.findIndex(b => b.id === bookId);
        if (index > -1) {
            books = books.filter(b => b.id !== bookId);
        } else {
            throw new Error('NOT Found');
        }
    }

}