import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { HomePage }  from './screens';

import './App.css';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      
      <Route path='*' element={<main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>} />
    </Routes>
  );
}

export default App;
