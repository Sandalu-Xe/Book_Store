import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch books from the backend API
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3333/books');
        setBooks(response.data); // Update books state with fetched data
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch books. Please try again later.");
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Books List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book._id}</td>
              <td>{book.Book_name}</td>
              <td>{book.author}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BooksList;
