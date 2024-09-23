import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../assets/style.css';

function CustomNavbar() {
    return (
        <nav>

            <h1>Perifericos</h1>
            <input type="text" placeholder="Buscar Perifericos" onChange={(e) => onBuscar(e.target.value)}/>

        </nav>
    )
}

export default CustomNavbar;


