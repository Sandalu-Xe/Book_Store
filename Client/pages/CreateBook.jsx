import React, { useState } from 'react';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:3333/books/create', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
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
   
<div className='p-4'>
  <BackButton />
  <h1 className='text-3xl my-4'>Create Book</h1>
  {loading && <Spinner animation="border" />}
  <Container className="d-flex justify-content-center">
    <Card border="primary" className="p-4 w-100" style={{ maxWidth: '600px' }}>
      <Form>
        <Form.Group controlId="formTitle" className="my-4">
          <Form.Label className="text-muted text-xl">Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-secondary px-4 py-2"
          />
        </Form.Group>
        
        <Form.Group controlId="formAuthor" className="my-4">
          <Form.Label className="text-muted text-xl">Author</Form.Label>
          <Form.Control
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border border-secondary px-4 py-2"
          />
        </Form.Group>
        
        <Form.Group controlId="formPublishYear" className="my-4">
          <Form.Label className="text-muted text-xl">Publish Year</Form.Label>
          <Form.Control
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border border-secondary px-4 py-2"
          />
        </Form.Group>
        
        <Button variant="primary" className="m-2" onClick={handleSaveBook}>
          Save
        </Button>
      </Form>
    </Card>
  </Container>
</div>
  );
}

export default CreateBooks

