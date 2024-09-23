import '../assets/perifericos.css';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ListaProductos from '../components/ListaProductos';
import  Footer from '../components/Footer';


const Perifericos = () => {
    const [terminoBusqueda, setTerminoBusqueda] = useState('');
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    // Cargar productos desde productos.json
    useEffect(() => {
        fetch('/data/productos.json')
            .then(response => {
                if (!response.ok) {
                    
                }
                return response.json();
            })
            .then(data => {
                setProductos(data);
                setProductosFiltrados(data);
            })
            .catch(error => console.error('Error al cargar productos:', error));
    }, []);

    // Filtrar productos en función del término de búsqueda
    useEffect(() => {
        const productosFiltrados = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
        );
        setProductosFiltrados(terminoBusqueda ? productosFiltrados : productos);
    }, [terminoBusqueda, productos]);

    return (
        <>
            <Navbar onBuscar={setTerminoBusqueda} /> {/* Asegúrate de que esto sea correcto */}
            
            <ListaProductos productos={productosFiltrados} />
        
        <Footer />
        </>
    );
};

export default Perifericos;
