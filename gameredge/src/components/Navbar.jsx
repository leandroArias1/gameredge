import '../assets/perifericos.css';
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

export default CustomNavbar;


