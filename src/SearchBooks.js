import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

class SearchBooks extends Component {
  state = {
    query: "",
    books: []
  };

  searchTerms = [
    "Android",
    "Art",
    "Artificial Intelligence",
    "Astronomy",
    "Austen",
    "Baseball",
    "Basketball",
    "Bhagat",
    "Biography",
    "Brief",
    "Business",
    "Camus",
    "Cervantes",
    "Christie",
    "Classics",
    "Comics",
    "Cook",
    "Cricket",
    "Cycling",
    "Desai",
    "Design",
    "Development",
    "Digital Marketing",
    "Drama",
    "Drawing",
    "Dumas",
    "Education",
    "Everything",
    "Fantasy",
    "Film",
    "Finance",
    "First",
    "Fitness",
    "Football",
    "Future",
    "Games",
    "Gandhi",
    "Homer",
    "Horror",
    "Hugo",
    "Ibsen",
    "Journey",
    "Kafka",
    "King",
    "Lahiri",
    "Larsson",
    "Learn",
    "Literary Fiction",
    "Make",
    "Manage",
    "Marquez",
    "Money",
    "Mystery",
    "Negotiate",
    "Painting",
    "Philosophy",
    "Photography",
    "Poetry",
    "Production",
    "Programming",
    "React",
    "Redux",
    "River",
    "Robotics",
    "Rowling",
    "Satire",
    "Science Fiction",
    "Shakespeare",
    "Singh",
    "Swimming",
    "Tale",
    "Thrun",
    "Time",
    "Tolstoy",
    "Travel",
    "Ultimate",
    "Virtual Reality",
    "Web Development",
    "iOS"
  ];

  updateQuery = (e, searchTerms) => {
    var query = e.target.value.trim() || "";
    this.setState({ query: query });
    if (query !== "" && ~searchTerms.indexOf(query)) {
      this.search(query);
    } else {
      this.setState({ books: [] });
    }
  };

  search(query) {
    BooksAPI.search(query).then(books => {
      this.setState({ books });
      console.log(books);
    });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={e => {
                this.updateQuery(e, this.searchTerms);
              }}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book => (
              <li key={book.id} className="book">
                <Book
                  onOptionChanged={this.props.onOptionChanged}
                  book={book}
                  bookState={this.props.bookState}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
