import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import {  Card, Container, Row, Col } from 'react-bootstrap';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3333/books/details/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });t
  }, []);

  return (
    <div className='p-4'>
    <BackButton />
    <h1 className='text-3xl my-4'>Show Book</h1>
    {loading ? (
      <Spinner animation="border" />
    ) : (
      <Container className="d-flex justify-content-center">
        <Card border="primary" className="p-4 w-auto">
          <Row className="my-4">
            <Col className="text-xl text-muted" md="auto">Id</Col>
            <Col>{book._id}</Col>
          </Row>
          <Row className="my-4">
            <Col className="text-xl text-muted" md="auto">Title</Col>
            <Col>{book.Book_name}</Col>
          </Row>
          <Row className="my-4">
            <Col className="text-xl text-muted" md="auto">Author</Col>
            <Col>{book.author}</Col>
          </Row>
          <Row className="my-4">
            <Col className="text-xl text-muted" md="auto">Publish Year</Col>
            <Col>{book.publishYear}</Col>
          </Row>
          <Row className="my-4">
            <Col className="text-xl text-muted" md="auto">Create Time</Col>
            <Col>{new Date(book.createdAt).toString()}</Col>
          </Row>
          <Row className="my-4">
            <Col className="text-xl text-muted" md="auto">Last Update Time</Col>
            <Col>{new Date(book.updatedAt).toString()}</Col>
          </Row>
        </Card>
      </Container>
    )}
  </div>
  );
};

export default ShowBook;

