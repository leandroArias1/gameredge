import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Asegúrate de incluir esto para la funcionalidad
import '../assets/style.css';
import '../assets/carousel.css'

const Carousel = () => {
    return (
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to="0" 
            className="active" 
            aria-current="true" 
            aria-label="Slide 1">
          </button>
          <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to="1" 
            aria-label="Slide 2">
          </button>
          <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to="2" 
            aria-label="Slide 3">
          </button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/carousel-auriculares.jpg" className="d-block w-100" alt="Auricular" />
          </div>
          <div className="carousel-item">
            <img src="./img/carousel-teclado.jpg" className="d-block w-100" alt="Teclado" />
          </div>
          <div className="carousel-item">
            <img src="./img/carousel-joystick.jpg" className="d-block w-100" alt="Joystick" />
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
    );
};

export default Carousel;
