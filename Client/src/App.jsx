import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import ShowBook from '../pages/ShowBook';
import CreateBook from '../pages/CreateBook';
import UpdateBook from '../pages/UpdateBook';
import DeleteBook from '../pages/DeleteBook';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-book" element={<ShowBook />} />
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/update-book" element={<UpdateBook />} />
        <Route path="/delete-book" element={<DeleteBook />} />
      </Routes>
    </Router>
  );
}

export default App;
