import React from 'react';
import Header from './Header';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Public from '../Routes/Public'
import '../assets/style.css';


function App() {
  return (
    <BrowserRouter>

    <Header/>
    <Public/>
    
    </BrowserRouter>
  );
}

export default App;