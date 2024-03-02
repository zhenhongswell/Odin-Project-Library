const dialog = document.querySelector("dialog");

const bookNameInput = document.querySelector('.nameInput');

const content = document.querySelector(".content");

const newBookBtn = document.querySelector('.createNewBook');

const closeButton = document.querySelector("dialog .close");

const submitButton = document.querySelector('dialog .sumbit');


class Library{
    // empty array
    constructor(){
        this.storage = [] 
    }

    addBook(name){
        const newBook = new Book(name)
        this.storage.push(newBook);
    }

    showBook(){
        console.log(this.storage)
    }
}

class Book{
    constructor(name){
        this.name = name
    }

    getBook(){
        return this
    }
}


const newLibrary = new Library()
newLibrary.addBook("1")



newLibrary.showBook()