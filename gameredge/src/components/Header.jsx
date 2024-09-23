import { Link } from 'react-router-dom';
import '../assets/header.css';
        
const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a className='title' href="/">Gamer's Edge</a>
            </div>
            <div className="navbar-links">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Perifericos">Periféricos</Link></li>
                    <li><Link to="/Juegos">Videojuegos</Link></li>
                    <li><Link to="/Formulario">Administrador</Link></li>
                </ul>
            </div>
            <form className="search-form">
                <input type="text" placeholder="Buscar..." className="search-input" />
                <button type="submit" className="search-button">Buscar</button>
            </form>
        </nav>
    );
};

export default Header;