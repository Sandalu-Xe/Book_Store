import React, { useState, useEffect } from 'react';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Button, Form, Container } from 'react-bootstrap';


const EditBook = () => {
  const [Book_name, setTitle] = useState('');
  const [Book_id, setBook_id] = useState('');
  const [author, setauthor] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3333/books/edit/${id}`)
    .then((response) => {
        setauthor(response.data.author);
        setBook_id(response.data.Book_id)
        setTitle(response.data.Book_name)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])
  
  const handleEditBook = () => {
    const data = {
      Book_name,
      Book_id,
      author,
    };
    setLoading(true);
    axios
      .put(`http://localhost:333/books/edit/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
    <BackButton />
    <h1 className="display-5 my-4">Edit Book</h1>
    {loading ? <Spinner animation="border" /> : ''}
    <Container className="border border-primary rounded p-4" style={{ maxWidth: '600px' }}>
      <Form>
        <Form.Group className="mb-4">
          <Form.Label className="text-muted">Title</Form.Label>
          <Form.Control
            type="text"
            value={Book_name}
            onChange={(e) => setTitle(e.target.value)}
            className="border-secondary"
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="text-muted">Author</Form.Label>
          <Form.Control
            type="text"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            className="border-secondary"
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="text-muted">Book_id</Form.Label>
          <Form.Control
            type="number"
            value={Book_id}
            onChange={(e) => setBook_id(e.target.value)}
            className="border-secondary"
          />
        </Form.Group>
        <Button variant="primary" className="w-100" onClick={handleEditBook}>
          Save
        </Button>
      </Form>
    </Container>
  </div>
  )
}
export default EditBook

