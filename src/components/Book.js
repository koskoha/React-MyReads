import React from 'react';

function Book(props) {
  return(
    <div>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+ props.bookInfo.imageLinks.thumbnail +')' }}></div>
          <div className="book-shelf-changer">
            <select value={props.bookInfo.shelf === undefined ? "" : props.bookInfo.shelf} 
              onChange={event => props.onShelfUpdate(props.bookInfo, event.target.value)} >
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.bookInfo.title }</div>
        <div className="book-authors">{props.bookInfo.authors}</div>
      </div>
    </div>
  )
}

export default Book;