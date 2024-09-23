import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';
import { Carousel } from 'react-bootstrap';



const CarouselComponent = () => {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../public/img/auricularescarousel.jpg"
              alt="Auriculares"
            />
          </Carousel.Item>
    
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../public/img/carousel-teclado.jpg"
              alt="Teclado"
            />
          </Carousel.Item>
    
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../public/img/carousel-joystick.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      );
    };

export default CarouselComponent;
