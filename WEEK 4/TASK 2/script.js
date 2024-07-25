// Book Constructor Function
function Book(title, author, pages, genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
}

// Library Array to hold the books
const library = [];

// Function to add a book to the library
function addBook(title, author, pages, genre) {
    if (!title || !author || !pages || !genre) {
        alert('All fields are required!');
        return;
    }
    const newBook = new Book(title, author, pages, genre);
    library.push(newBook);
    displayBooks();
}

// Function to display books
function displayBooks(books = library) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Clear previous list

    if (books.length === 0) {
        bookList.innerHTML = '<p>No books found.</p>';
        return;
    }

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book');
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Genre: ${book.genre}</p>
        `;
        bookList.appendChild(bookItem);
    });
}

// Function to search books by title
function searchBooks(title) {
    const searchResult = library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    displayBooks(searchResult);
}

// Event listener for adding books
document.getElementById('addBookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = parseInt(document.getElementById('pages').value, 10);
    const genre = document.getElementById('genre').value.trim();
    addBook(title, author, pages, genre);
    this.reset(); // Clear the form after submission
});

// Event listener for searching books
document.getElementById('searchInput').addEventListener('input', function() {
    const title = this.value.trim();
    searchBooks(title);
});
