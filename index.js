const myLibrary = [];

const Book = function(name,page){
    this.name = name;
    this.page = page;
}

// let Book_Object = {
//    name: 'default-book-name',
// }

// let newbook_object = Object.create(Book_Object);
// newbook_object.name = 'test';

function addBookToLibrary(name,page){
    let newbook = new Book(name,page);
    myLibrary.push(newbook);
}

function displayMyLibrary(){
    myLibrary.forEach(element => {
        console.log(element);
    });
}


addBookToLibrary('test1','12');
addBookToLibrary('test2','15');
addBookToLibrary('test3','20');
displayMyLibrary();



