import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FilteredProducts = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchInternalProducts = async () => {
      try {
        const response = await axios.get('/internalProducts.json');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching internal products:', error);
      }
    };
    fetchInternalProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Filtered Products</h1>
      <input
        type="text"
        className="filter-input"
        placeholder="Search for a product"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul className="filtered-products">
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredProducts;
