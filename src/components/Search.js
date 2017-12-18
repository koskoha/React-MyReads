import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import Book from './Book';

class Search extends Component {
  state={
    searchResults:[],
    query:'' 
  }

  updateQuery(query) {
    this.setState( { query })
    this.runSearch();
  }

  runSearch(){
    BooksAPI.search(this.state.query, 15).then(books => {this.setState({searchResults: books})})
  }

  render() {
    const { myShelf } = this.props;
    let myBooks;
    !_.isEmpty(myShelf) ? myBooks = [...myShelf.read, ...myShelf.currentlyReading, ...myShelf.wantToRead] : myBooks = [];
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { 
              this.state.searchResults && this.state.searchResults.map(book => {
                const { id } = book;
                const match = myBooks.filter( book => book.id === id);
                const bookInfo = match[0] === undefined ? book : match[0];
                return <li key={bookInfo.id}>
                    <Book
                      onShelfUpdate={this.props.onShelfUpdate}    
                      bookInfo={bookInfo}
                    />
                  </li>
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;