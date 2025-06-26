import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/navbar" element={<Navbar />} />
    </Routes>
  );
}
