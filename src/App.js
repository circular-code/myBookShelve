import React from "react";
import { Route } from "react-router-dom";
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  onOptionChanged = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={this.state.books}
              onOptionChanged={this.onOptionChanged}
            />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchBooks
              books={this.state.books}
              onOptionChanged={this.onOptionChanged}
              bookState={this.state}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
