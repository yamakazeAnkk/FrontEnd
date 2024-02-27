// BookList.js
import React, { useState } from 'react'
import '../Pages/Book.css'

export default function BookList() {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleAddBook = () => {
    setBooks([...books, { title, author }])
    setTitle('')
    setAuthor('')
  }

  return (
    <div className="book-list">
      <h1 className="book-list-title">Book List</h1>
      <div className="book-inputs">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
      <table className="book-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
