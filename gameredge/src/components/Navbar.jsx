import '../assets/perifericos.css';
// import {Link} from "react-router-dom";

function Navbar({onBuscar}) {
    return (
        <nav>
            <h1>Periféricos</h1>
            <input
                type="text"
                placeholder="Buscar Periféricos"
                onChange={(e) => onBuscar(e.target.value)}
            />
            <button className='clear' onClick={() => onBuscar('')}>Limpiar</button>
        </nav>
    );
}




export default Navbar;
