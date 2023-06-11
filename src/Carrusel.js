// Carrusel.js
import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Carrusel() {
  return (
    <div className="carousel-container margin-bottom">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="CorteIA1.png" alt="Imagen 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="CorteIA2.png" alt="Imagen 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="CorteIA3.png" alt="Imagen 3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrusel;

