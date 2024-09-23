import React from 'react';
import NavBar from './Navbar';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Public from '../Routes/Public'
import '../assets/style.css';


function App() {
  return (
<<<<<<< HEAD
   <BrowserRouter>

    <NavBar/>
    <Public/>
    
   </BrowserRouter>
=======
    <>
    <Router>
    <NavBar/>
    <Public/>
    
    </Router>
    </>
>>>>>>> af249d2df4a810aebaa0122f5001bb31d7c50847
  );
}

export default App;