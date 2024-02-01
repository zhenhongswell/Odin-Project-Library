let myLibrary = [];

const dialog = document.querySelector("dialog");

const bookNameInput = document.querySelector('.nameInput');

const content = document.querySelector(".content");

const newBookBtn = document.querySelector('.createNewBook');

const closeButton = document.querySelector("dialog .close");

const submitButton = document.querySelector('dialog .sumbit');


const Book = function(name,read){
    this.name = name;
    this.read = read;
}

function addBookToLibrary(newbook){
    myLibrary.push(newbook);
}

function displayMyLibrary(){
    myLibrary.forEach(element => {
        console.log(element);
    });
}

newBookBtn.addEventListener("click",(event)=>{
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    if (bookNameInput.value === '') {
        dialog.close();
        return;
    }
    bookNameInput.value = '';
    dialog.close();
});

function myLibrary_remove_by_book_name(arr,value){
    return arr.filter(function(ele){
        return ele.name != value;
    });
}

submitButton.addEventListener("click", () => {
    if (bookNameInput.value === '') {
        dialog.close();
        return;
    }
    const book_div = document.createElement('div');

    let newbook = new Book(bookNameInput.value,false);
    addBookToLibrary(newbook);
    book_div.classList.add('book');
    const book_name = document.createElement('div');
    book_name.textContent = `book name: ${newbook.name}`;
    book_div.appendChild(book_name);
    book_div.setAttribute('data',newbook.name);

    
    const book_read_lable = document.createElement('label');
    book_read_lable.textContent = 'read';
    book_div.appendChild(book_read_lable);

    const book_read = document.createElement('input');
    book_read.setAttribute('id','checkbox');
    book_read.setAttribute('type','checkbox');
    book_read.setAttribute('data',newbook.name);
    book_read.addEventListener('click',(e)=>{
        let bookReadArray = myLibrary.map(element =>{
            // return element;
            if (element.name === book_read.getAttribute('data')){
                element.read = book_read.checked;
                return element;
            }
            else{
                return element;
            }
        })
        myLibrary = bookReadArray.slice();
        displayMyLibrary();
    })

    book_div.appendChild(book_read);
    
    // adding the remove button
    const removeBookBtn = document.createElement('button');
    removeBookBtn.textContent = 'remove This Book!';
    removeBookBtn.addEventListener('click',function(e){
        const bookNameToRemove = this.parentElement.getAttribute('data');
        const filtered_array = myLibrary_remove_by_book_name(myLibrary,bookNameToRemove);
        myLibrary = filtered_array.slice();
        // displayMyLibrary();
        this.parentElement.remove();
    })

    book_div.appendChild(removeBookBtn);

    content.appendChild(book_div);


    bookNameInput.value = '';
    dialog.close();
});





