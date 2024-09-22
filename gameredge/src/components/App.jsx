import React from 'react';
import ProductList from './ProductList';
import FilteredProducts from './FilteredProducts';
import '../assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  return (
    <>
      <header>
        <div className="nav-container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="index.html">Gamer's Edge</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="../index.html">
                      <i className="fa-solid fa-house"></i>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Productos
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="../Mouse/mouse.html">Mouse</a></li>
                      <li><a className="dropdown-item" href="../Teclado/teclado.html">Teclado</a></li>
                      <li><a className="dropdown-item" href="../Auriculares/auriculares.html">Auriculares</a></li>
                      <li><a className="dropdown-item" href="../Mousepad/mousepad.html">Mouse Pad</a></li>
                      <li><a className="dropdown-item" href="../Joystick/joystick.html">Joystick</a></li>
                      <li><a className="dropdown-item" href="../Monitor/monitor.html">Monitor</a></li>
                      <li><a className="dropdown-item" href="/juegos/juegos.html">Juegos</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Formulario/form.html">Agregar productos</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <li className="nav-item">
                  <div className="cart">
                    <a className="nav-link" href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                  </div>
                </li>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../assets/img/auricularescarousel.jpg" className="d-block w-100" alt="Auriculares" />
          </div>
          <div className="carousel-item">
            <img src="../assets/img/joystcikcarousel.jpg" className="d-block w-100" alt="Joystick" />
          </div>
          <div className="carousel-item">
            <img src="../assets/img/carousel-teclado.jpg" className="d-block w-100" alt="Teclado" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h3 className="mt-5">Nuestros productos destacados!</h3>
      <div className="cards d-flex flex-wrap justify-content-around mt-4">
        {/* Repite estas cards como subcomponentes si lo deseas */}
        {[
          { imgSrc: "../assets/img/MOUSEPAD9.jpg", title: "Mousepad Cougar", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum." },
          { imgSrc: "../assets/img/JOYSTICK13.jpg", title: "Joystick PS5", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum." },
          { imgSrc: "../assets/img/MICROFONO6.jpg", title: "Microfono HyperX", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum." },
          { imgSrc: "../assets/img/AURICULAR4.jpg", title: "Auriculares HyperX", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum." },
          { imgSrc: "../assets/img/MOUSEPAD7.jpg", title: "Teclado mecanico", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum." }
        ].map((product, index) => (
          <div className="card" style={{ width: '18rem' }} key={index}>
            <img src={product.imgSrc} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.text}</p>
              <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
          </div>
        ))}
      </div>

      <footer id="contacto" className="mt-5">
        <div className="titles text-center">
          <h1 className="h1-footer">Gamer's Edge</h1>
          <br />
          <h1 className="footer-title">Acerca de Nosotros</h1>
        </div>
        <div className="footer-icons d-flex justify-content-around">
          <div className="redes">
            <h1 className="redes-footer">Redes Sociales</h1>
            <a href="#" className="social-link"><i className="fa-brands fa-github" id="git"></i>@Gamers.Edge</a>
            <a href="#" className="social-link"><i className="fa-brands fa-instagram" id="ig"></i>@GamersEdge</a>
            <a href="#" className="social-link"><i className="fa-brands fa-linkedin" id="li"></i>@Gamer's Edge</a>
          </div>
          <div className="contactanos">
            <h1 className="contacto-footer">Contactanos</h1>
            <a href="#" className="contact-link"><i className="fa-brands fa-whatsapp" id="wh"></i>+54 9 11 9999-0000</a>
            <a href="#" className="contact-link"><i className="fa-regular fa-envelope" id="mail"></i>GamersEdge@gmail.com</a>
          </div>
        </div>
        <div className="Copyright text-center">
          <p className="parrafo-footer">Copyright &copy; 2024 - Todos los derechos reservados</p>
        </div>
      </footer>

      <div id="saludo" className="alert alert-primary text-center" role="alert" style={{ display: 'none' }}>
        ¡Bienvenido a Gamer's Edge! Disfruta de nuestros productos.
      </div>
    </>
  );
};

export default App;
