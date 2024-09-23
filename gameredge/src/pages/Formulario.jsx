import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../components/Footer'
import Header  from '../components/Header'


const Formulario = () => {
  const [form, setForm] = useState({
    product: "",
    brand: "",
    price: "",
    stock: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
    <Header />

<div className="form-container">
<h1 className="title-form">AGREGAR PRODUCTOS</h1>
<form className="form-add" onSubmit={handleSubmit}>
  <label className="productL" htmlFor="product">
    Producto
  </label>
  <input
    type="text"
    className="product-name"
    id="product"
    name="product"
    placeholder="Ej: Teclado AlloyFPS"
    required
    onChange={handleChange}
  />
  <label className="brandL" htmlFor="brand">
    Marca
  </label>
  <input
    type="text"
    className="brandI"
    id="brand"
    name="brand"
    placeholder="Ej: HyperX"
    required
    onChange={handleChange}
  />
  <label className="priceL" htmlFor="price">
    Precio
  </label>
  <input
    type="number"
    className="priceI"
    id="price"
    name="price"
    placeholder="Ej: $100.000"
    required
    onChange={handleChange}
  />
  <label className="stockL" htmlFor="stock">
    Stock Disponible
  </label>
  <input
    type="number"
    className="stockI"
    id="stock"
    name="stock"
    placeholder="Ej: 100u"
    onChange={handleChange}
  />
  <label htmlFor="validationCustom04" className="categoryL">
    Categoria
  </label>
  <div className="select-category">
    <select
      className="categories"
      name="category"
      value={form.category}
      onChange={handleChange}
      required
    >
      <option value="" disabled>
        Seleccionar categoría
      </option>
      <option value="Mouse">Mouse</option>
      <option value="Teclado">Teclado</option>
      <option value="Auriculares">Auriculares</option>
      <option value="Mouse Pad">Mouse Pad</option>
      <option value="Joystick">Joystick</option>
      <option value="Monitor">Monitor</option>
    </select>
  </div>
  <div className="sumbit">
    <button className="sumbitB" type="submit">
      Agregar Producto
    </button>
  </div>
</form>
</div>
<Footer />
</>
);
};

export default Formulario;