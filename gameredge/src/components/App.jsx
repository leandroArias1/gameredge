import NavBar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Public from '../Routes/Public'
import '../assets/style.css';


function App() {
  return (
   <>
   <Router>

    <NavBar/>
    <Public/>
    
   </Router>
   </>
  );
}

export default App;