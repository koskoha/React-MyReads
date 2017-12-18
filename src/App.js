import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css'

import Search from './components/Search'
import ListBooks from './components/ListBooks'

class BooksApp extends React.Component {

  constructor(props) {
    super(props)
    this.onShelfUpdate = this.onShelfUpdate.bind(this);
  }

  state={
    'books':{},
  }

  fetchBooks(){
    BooksAPI.getAll().then(booksResult => {
      const books = {
        'currentlyReading': booksResult.filter(book => book.shelf === "currentlyReading"),
        'wantToRead': booksResult.filter(book => book.shelf === "wantToRead"),
        'read': booksResult.filter(book => book.shelf === "read")
      }
      this.setState({ books })
    });
  }

  onShelfUpdate(book,shelf){
    BooksAPI.update(book,shelf).then(res => {this.fetchBooks()});
  }

  componentDidMount(){
    this.fetchBooks();
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks 
            books={this.state.books}
            onShelfUpdate={this.onShelfUpdate}
          />
        )}/>
        <Route path='/search' render={() => (
          <Search
            myShelf={this.state.books}
            onShelfUpdate={this.onShelfUpdate}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
