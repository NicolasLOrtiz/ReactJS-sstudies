interface IBook {
  title?: string;
  author?: string;
  isbn?: string;
  availability?: boolean;
  sales?: number;
}

class Book {
  title: string;
  author: string;
  isbn: string;

  constructor(title: string, author: string, isbn: string) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const books: Map<number, IBook> = new Map();
const bookList: IBook[] = [];

const addBook = (
  title: string,
  author: string,
  isbn: string,
  availability: boolean,
  sales: number
) => {
  const book = {
    ...createBook(title, author, isbn),
    sales,
    availability,
    isbn,
  };

  bookList.push(book);
  return book;
};

const createBook = (title: string, author: string, isbn: string) => {
  const existingBook = books.has(Number(isbn));

  if (existingBook) {
    return books.get(Number(isbn));
  }

  const book = new Book(title, author, isbn);
  books.set(Number(isbn), book);

  return book;
};

addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

console.log("Total amount of copies: ", bookList.length);
console.log("Total amount of books: ", books.size);

export { addBook, createBook, books, bookList };
