// App.js
import React, { useEffect, useState } from 'react';
import '../assets/productlist.css';

const ProductList = () => {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 2; // Define cuántos productos quieres mostrar por vista

  const fetchGames = async () => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=8d1b028c7e834a8eb4d48f492f8a4d32&dates=2019-09-01,2019-09-30&platforms=18,1,7&page_size=40`);
      const data = await response.json();
      setGames(data.results);
      setTotalPages(Math.ceil(data.results.length / itemsPerPage));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  // Obtén los productos de la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedGames = games.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="App container">
      <h1 className="my-4" >Lista de Juegos</h1>
      <div className="row">
        {selectedGames.map((game) => (
          <div className="col-md-4" key={game.id}>
            <div className="card" style={{ width: '740px' }}>
              <img src={game.background_image} className="card-img-top" alt={game.name} />
              <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
                <p className="card-text">
                  {game.released ? `Fecha de lanzamiento: ${game.released}` : 'Sin fecha de lanzamiento'}
                </p>
                <p className="price">U$49,99</p>
                <a href={game.website || '#'} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Añadir al carrito
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination d-flex justify-content-center my-4">
        <button onClick={handlePreviousPage} disabled={currentPage === 1} className="btn btn-secondary mx-2" style={{ backgroundColor: '#9f111b' }}>
          Anterior
        </button>
        <span className="align-self-center" style={{ color: '#cccc' }}>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn btn-secondary mx-2" style={{ backgroundColor: '#9f111b' }}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ProductList;
