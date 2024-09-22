import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const productsPerPage = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setTotalProducts(response.data.length); // Total de productos
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProducts();
  }, []);

  // Calcular los índices de los productos a mostrar
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h1>Lista de productos</h1>
      {currentProducts.length === 0 ? ( // Verificar si hay productos
        <p>Cargando productos...</p>
      ) : (
        <ul>
          {currentProducts.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Anterior
      </button>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Siguiente
      </button>
      <p>Página {currentPage} de {totalPages}</p> {/* Mostrar número de página */}
    </div>
  );
};

export default ProductList;
