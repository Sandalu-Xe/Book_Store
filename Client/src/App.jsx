import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CreateBook from '../pages/CreateBook.jsx';
import ShowBook from '../pages/ShowBook.jsx';
import EditBook from '../pages/EditbBook.jsx';
import DeleteBook from '../pages/DeleteBook';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/books' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
    </Router>
  );
};

export default App;
