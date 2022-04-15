let books = [{
    id: '1',
    title: 'Algorithm',
    isbn: '123546-986-655',
    publishedDate: '2011-01-01',
    author: 'Pravash Raj Upreti'
}, {
    id: '2',
    title: 'JAVA 8',
    isbn: '123546-986-785',
    publishedDate: '2014-01-01',
    author: 'Pravash Raj Upreti'
}, {
    id: '4',
    title: 'Software Architecture',
    isbn: '123546-986-231',
    publishedDate: '2000-01-01',
    author: 'Pravash Raj Upreti'
}];

module.exports = class Product {

    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {
        this.id = Math.random().toString();
        books.push(this);
        return this;
    }

    update() {
        const index = books.findIndex(p => {
            return p.id === this.id
        });
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
        const index = books.findIndex(p => p.id === bookId);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error('NOT Found');
        }
    }

    static deleteById(bookId) {
        const index = books.findIndex(p => p.id === bookId);
        if (index > -1) {
            books = books.filter(p => p.id !== bookId);
        } else {
            throw new Error('NOT Found');
        }
    }

}