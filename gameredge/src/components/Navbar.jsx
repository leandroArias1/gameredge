
const Navbar  = ({onBusqueda}) => {
    return (
        <nav>

            <h1>Perifericos</h1>
            <input type="text" placeholder="Buscar Perifericos" onChange={(e) => onBuscar(e.target.value)}/>

        </nav>
    )
}

export default Navbar;