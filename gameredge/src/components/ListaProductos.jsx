const ListaProductos  = ({productos}) => {
    return (
        <div>
            {productos.length > 0 ? (
                productos.map((producto) =>(
                <div  key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <p>{producto.precio}</p>
                </div>
                ))
            ) : (
                <p>No hay productos</p>
            )}
        </div>
    );
}

export default  ListaProductos;

    