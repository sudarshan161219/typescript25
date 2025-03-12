//* Alternate Methods Of Creating Objects

// const book = {
//   title: "The Title",
//   pages: 300,
//   author: "John",
// };

const book = new Object();

Object.defineProperty(book, "title", {
  value: "This is the title of the book",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(book, "author", {
  value: "John",
  writable: false,
  enumerable: true,
  configurable: true,
});

book.author = "Mark";

console.log(book);
