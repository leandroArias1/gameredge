import React from 'react';
import NavBar from './Navbar';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Public from '../Routes/Public'
import '../assets/style.css';


function App() {
  return (
   <BrowserRouter>

    <NavBar/>
    <Public/>
    
   </BrowserRouter>
  );
}

export default App;