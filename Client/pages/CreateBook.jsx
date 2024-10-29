import React, { useState } from 'react';

const CreateBook = () => {
  const [bookTitle, setBookTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating Book:', bookTitle);
  };

  return (
    <div>
      <h1>Create Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          placeholder="Book Title"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBook;
