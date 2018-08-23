import React, { Component } from "react";
class Book extends Component {
  render() {
    var book = this.props.book;

    if (this.props.bookState) {
      this.props.bookState.books
        .filter(function(bookStateBook) {
          return bookStateBook.id === book.id;
        })
        .forEach(function(bookStateBook) {
          book.shelf = bookStateBook.shelf;
        });
    }
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks &&
                book.imageLinks.thumbnail}`
            }}
          />
          <div className="book-shelf-changer">
            <select
              defaultValue={book.shelf || "none"}
              onChange={e => this.props.onOptionChanged(book, e.target.value)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option
                disabled={book.shelf === "currentlyReading" ? true : false}
                value="currentlyReading"
              >
                Currently Reading
              </option>
              <option
                disabled={book.shelf === "wantToRead" ? true : false}
                value="wantToRead"
              >
                Want to Read
              </option>
              <option
                disabled={book.shelf === "read" ? true : false}
                value="read"
              >
                Read
              </option>
              <option
                disabled={book.shelf === "none" ? true : false}
                value="none"
              >
                None
              </option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title || "no title given"}</div>
        <div className="book-authors">
          {(book.authors && book.authors.join(", ")) || "no author given"}
        </div>
      </div>
    );
  }
}

export default Book;
