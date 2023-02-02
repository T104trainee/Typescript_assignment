"use strict";
const books = [
    {
        title: 'Book',
        author: 'Name',
    },
    {
        title: 'Book2',
        author: 'Name2',
    },
];
//function to return book titles
function getTitlesArray(books) {
    let titlesArray = [];
    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        titlesArray.push(books[bookIndex].title);
    }
    console.log(titlesArray);
}
//calling the function
getTitlesArray(books);
