import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Bookshelf from './Bookshelf';

class ListBooks extends Component {
  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf 
              shelfTitle='Currently Reading' 
              onShelfUpdate={this.props.onShelfUpdate} 
              books={this.props.books.currentlyReading} />
            <Bookshelf 
              shelfTitle='Want to Read' 
              onShelfUpdate={this.props.onShelfUpdate} 
              books={this.props.books.wantToRead}/>
            <Bookshelf 
              shelfTitle='Read' 
              onShelfUpdate={this.props.onShelfUpdate} 
              books={this.props.books.read}/>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;
