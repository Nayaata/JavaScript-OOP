/**
 Task 1.
 Create a module for working with books
 The module must provide the following functionalities:
 Add a new book to category
 Each book has unique title, author and ISBN
 It must return the newly created book with assigned ID
 If the category is missing, it must be automatically created
 List all books
 Return an array of books
 Books are sorted by ID
 This can be done by author, by category or all
 They are provided by an options object {category: ...} or {author: ...}
 List all categories
 Return an array of categories
 Categories are sorted by ID
 Each book/catagory has a unique identifier (ID) that is a number greater than 1
 When adding a book/category, the ID is generated automatically
 Add validation everywhere, where possible
 Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
 Author is any non-empty string
 Unique params are Book title and Book ISBN
 Book ISBN is an unique code that contains either 10 or 13 digits
 If something is not valid - throw Error
 */

function solve() {
    var library = (function () {
        var books = [],
            categories = [];


        function listBooks(param) {
            if (arguments.length > 0) {
                if (typeof param.category !== 'undefined') {
                    if (typeof categories[param.category] !== 'undefined') {
                        return categories[param.category].books;
                    } else {
                        return [];
                    }
                }
                if (typeof param.author !== 'undefined') {
                    var booksInArr = [];
                    for (var i = 0,len = books.length; i < len; i+=1) {
                        if (books[i].author === param.author) {
                            booksInArr.push(books[i]);
                        }
                    }
                    return booksInArr;
                }
            }
            return books;
        }

        function createBook(name, type) {
            for (var i = 0, len = books.length; i < len; i+=1) {
                if (books[i][type] === name) {
                    return true;
                }
            }
            return false;
        }

        function createCategory(name) {
            categories[name] = {
                books: [],
                ID: categories.length + 1
            };
        }

        function checkBooksInfo(book, argsLen) {
            if (Object.keys(book).length !== argsLen) {
                throw new Error('All of the book parameters must be passed');
            }
            for (var param in book) {
                if (typeof book[param] === 'undefined') {
                    throw new Error(param + ' ' + 'cannot be undefined');
                }
            }
        }

        function isValid(author) {
            if (author.trim() === '') {
                throw new Error('Author name cannot be non-empty string');
            }
        }

        function isIsbnValid(isbn) {
            if (isbn.length !== 10 && isbn.length !== 13) {
                throw new Error('Book ISBN is an unique code and must contains either 10 or 13 digits');
            }
            if (!/^[0-9]+$/.test(isbn.toString())) {
                throw new Error('ISBN code must contains only numbers');
            }
        }

        function isNameOrCategoryValid(name) {
            if (name.length < 2 || name.length > 100) {
                throw new Error('Name must be between 2 and 100 characters');
            }
        }

        function addBook(book) {
            book.ID = books.length + 1;

            checkBooksInfo(book, 5);

            if (createBook(book.title, 'title')) {
                throw new Error('Book with the same title already exists.');
            }
            if (createBook(book.isbn, 'isbn')) {
                throw new Error('Book with the same ISBN already exists.');
            }
            if (categories.indexOf(book.category) < 0) {
                createCategory(book.category);
            }

            isValid(book.author);
            isIsbnValid(book.isbn);
            isNameOrCategoryValid(book.title);
            isNameOrCategoryValid(book.category);

            categories[book.category].books.push(book);

            books.push(book);
            return book;
        }

        function listCategories(category) {
            var categoryName = [];
            Array.prototype.push.apply(categoryName, Object.keys(categories));

            return categoryName;
        }

        return {
            books: {
                list: listBooks,
                add: addBook
            },
            categories: {
                list: listCategories
            }
        };
    } ());
    return library;
}
module.exports = solve;