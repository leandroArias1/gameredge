import '../assets/perifericos.css';
import {Link} from "react-router-dom";

function CustomNavbar({onBuscar}) {
    return (
        <nav>
            <h1>Periféricos</h1>
            <input
                type="text"
                placeholder="Buscar Periféricos"
                onChange={(e) => onBuscar(e.target.value)}
            />
            <button onClick={() => onBuscar('')}>Limpiar</button>
        </nav>
    )
}


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand"><a className='title' href="/">Gamer's Edge</a></div>
      <div className="navbar-links">
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/perifericos">Perifericos</Link></li>
            <li><Link to="/juegos">Videojuegos</Link></li>
            <li><Link to="/formulario">Administrador</Link></li>
        </ul>
      </div>
      <form className="search-form">
        <input type="text" placeholder="Buscar..." className="search-input" />
        <button type="submit" className="search-button">Buscar</button>
      </form>
    </nav>
  );
};

export default Navbar;
