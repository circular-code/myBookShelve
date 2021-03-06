import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(book => {
                      return book.shelf === "currentlyReading";
                    })
                    .map(book => (
                      <li key={book.id} className="book">
                        <Book
                          onOptionChanged={this.props.onOptionChanged}
                          book={book}
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(book => {
                      return book.shelf === "wantToRead";
                    })
                    .map(book => (
                      <li key={book.id} className="book">
                        <Book
                          onOptionChanged={this.props.onOptionChanged}
                          book={book}
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(book => {
                      return book.shelf === "read";
                    })
                    .map(book => (
                      <li key={book.id} className="book">
                        <Book
                          onOptionChanged={this.props.onOptionChanged}
                          book={book}
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className="add-books">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
