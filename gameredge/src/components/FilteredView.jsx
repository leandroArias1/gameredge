// src/components/FilteredView.js
import React, { useState, useEffect } from "react";
import productsData from "../assets/ApiInterna.json";

const FilteredView = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState("All");

    useEffect(() => {
    if (category === "All") {
        setFilteredProducts(productsData);
    } else {
        const filtered = productsData.filter((product) => product.category === category);
        setFilteredProducts(filtered);
    }
    }, [category]);

    return (
    <div>
        <h1>Filtrar productos</h1>
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="All">Todos</option>
        <option value="Periféricos">Periféricos</option>
        <option value="Juegos">Juegos</option>
        </select>

        <ul>
        {filteredProducts.map((product) => (
            <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            </li>
        ))}
        </ul>
    </div>
    );
};

export default FilteredView;
