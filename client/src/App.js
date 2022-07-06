import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { HomePage }  from './screens';

import './App.css';
import SingleShoes from './screens/SingleShoes';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/event/:eventId' element={<SingleShoes />}/>
      
      <Route path='*' element={<main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>} />
    </Routes>
  );
}

export default App;
