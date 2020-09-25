import { stringify } from "querystring";

interface IBook{
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
}

function printBook(book: IBook) {
    var output: string = "";
    output += `Title: ${book.title}, Author: ${book.author}`;
    if(book.published != undefined) {
        output += `, Published: ${book.published}`
    }
    if(book.pages != undefined) {
        output += `, Pages: ${book.pages}` 
    }
    console.log(output);
}

let book :IBook = {
    title: "The Great Gatsby",
    author: "Francis Scott Fitzgerald",
    published: new Date("1974"),
    pages: 218,
}
// Det følgende er ikke tilladt, når author er readonly.
// book.author = "New Author";
printBook(book);

// Duck Typing: Vi har definieret et interface IBoook, med title forfatter osv. ved at skabe en book som indeholder de samme
// attributter så kan vi behandle book som værende en IBook. Det betyder at vi også kunne definerer flere attributter op
// objektet book, og stadig bruge det som en IBook, book skal som minimum blot implementere alt i IBook for at kunne bruges some en IBook.

let anotherBook = {
    title: "To Kill A Mockingbird",
    author: "Harper Lee",
}
printBook(anotherBook);

class Book implements IBook{
    title: string;
    author: string;
    published?: Date;
    pages?: number;
    constructor(title:string,author:string) {
        this.title = title;
        this.author = author;
    }
}