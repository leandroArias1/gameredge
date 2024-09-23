import '../assets/perifericos.css';
const ListaProductos = ({ productos }) => {
    return (
        <div className="card-container">
            {productos.length > 0 ? (
                productos.map((producto) => (
                    <div className='card' key={producto.id}>
                        <img className='card-img-top' src={producto.imageURL} alt={producto.nombre} />
                        <h2>{producto.nombre}</h2>
                        <p>{producto.descripcion}</p>
                        <p className='precio'> PRECIO: ${producto.precio}</p>

                    </div>
                ))
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
}

export default ListaProductos;
