// src/App.js
import React from "react";
import ProductList from "./components/ProductList";
import FilteredView from "./components/FilteredView";

function App() {
  return (
    <div className="App">
      <ProductList />
      <FilteredView />
    </div>
  );
}

export default App;
