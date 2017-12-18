import React from 'react';

import Book from './Book';

function Bookshelf(props) {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            props.books && props.books.map(book => (<li><Book onShelfUpdate={props.onShelfUpdate} bookInfo={book}/></li>))
          }
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf;