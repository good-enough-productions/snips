import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';
import Tags from './pages/Tags';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="tags" element={<Tags />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;