import React, { useState } from 'react';

const DeleteBook = () => {
  const [bookId, setBookId] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();
    console.log('Deleting Book ID:', bookId);
  };

  return (
    <div>
      <h1>Delete Book</h1>
      <form onSubmit={handleDelete}>
        <input
          type="text"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          placeholder="Book ID"
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteBook;
