// Cortes.js
import React from "react";
import Carrusel from "./Carrusel";

function Cortes() {
  return (
    <div id="cortes">
      <section id="testimonios" className="testimonios seccion-clara">
        <h2 className="seccion-titulo">Testimonios</h2>
        <h3 className="seccion-descripcion">Estos son algunos cortes de nuestros clientes</h3>
        <Carrusel />
      </section>
    </div>
  );
}

export default Cortes;
