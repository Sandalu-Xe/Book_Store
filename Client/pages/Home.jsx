import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Book Management Home</h1>
      <nav>
        <Link to="/show-book">Show Book</Link> |{' '}
        <Link to="/create-book">Create Book</Link> |{' '}
        <Link to="/update-book">Update Book</Link> |{' '}
        <Link to="/delete-book">Delete Book</Link>
      </nav>
    </div>
  );
};

export default Home;
