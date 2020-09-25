"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printBook(book) {
    var output = "";
    output += "Title: " + book.title + ", Author: " + book.author;
    if (book.published != undefined) {
        output += ", Published: " + book.published;
    }
    if (book.pages != undefined) {
        output += ", Pages: " + book.pages;
    }
    console.log(output);
}
var book = {
    title: "The Great Gatsby",
    author: "Francis Scott Fitzgerald",
    published: new Date("1974"),
    pages: 218,
};
// Det følgende er ikke tilladt, når author er readonly.
// book.author = "New Author";
printBook(book);
// Duck Typing: Vi har definieret et interface IBoook, med title forfatter osv. ved at skabe en book som indeholder de samme
// attributter så kan vi behandle book som værende en IBook. Det betyder at vi også kunne definerer flere attributter op
// objektet book, og stadig bruge det som en IBook, book skal som minimum blot implementere alt i IBook for at kunne bruges some en IBook.
var anotherBook = {
    title: "To Kill A Mockingbird",
    author: "Harper Lee",
};
printBook(anotherBook);
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    return Book;
}());
//# sourceMappingURL=interfaces1.js.map