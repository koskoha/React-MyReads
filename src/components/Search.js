import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';

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
    BooksAPI.search(this.state.query, 15).then(books => {console.log("Search: ", books); this.setState({searchResults: books})})
  }

  render() {
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
              this.state.searchResults.map(book => <Book onShelfUpdate={this.props.onShelfUpdate} bookInfo={book}/>)
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;