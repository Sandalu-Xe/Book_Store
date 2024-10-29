import React, { useState } from 'react';

const UpdateBook = () => {
  const [bookTitle, setBookTitle] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('Updating Book to:', bookTitle);
  };

  return (
    <div>
      <h1>Update Book</h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          placeholder="New Book Title"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateBook;
