import React from 'react';

function Precios() {
  return (
    <div id="precios">
      <section id="experiencia" className="experiencia seccion-clara">
        <div className="container text-center">
          <div className="row">
            {/* Desarrollo web */}
            <div className="columna col-12 col-md-4">
              <div className="columna-contenido">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-1" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="1.5" />
                  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z" />
                </svg>
                <p className="experiencia-titulo">Cabello</p>
                <p>Asesoría, corte y lavado de cabello. Incluye peinado con pomada a elección $10.000</p>
                <div className="badges-contenedor">
                  <span className="badge text-bg-primary">Perfilado</span>
                  <span className="badge text-bg-primary">Degradado</span>
                  <span className="badge text-bg-primary">Rasurado</span>
                  <span className="badge text-bg-primary">Limpieza capilar</span>
                </div>
              </div>
            </div>
            {/* Articulos */}
            <div className="columna col-12 col-md-4">
              <div className="columna-contenido">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-2" viewBox="0 0 16 16">
                  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z" />
                  <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
                <p className="experiencia-titulo">Barba</p>
                <p>Asesoría, arreglo de barba, aplicación de toalla caliente, aceite y limpieza facial $7.000</p>
                <div className="badges-contenedor">
                  <span className="badge text-bg-primary">Perfilado</span>
                  <span className="badge text-bg-primary">Navaja</span>
                  <span className="badge text-bg-primary">Al ras</span>
                  <span className="badge text-bg-primary">Vikingo</span>
                </div>
              </div>
            </div>
            {/* Estudiante */}
            <div className="columna col-12 col-md-4">
              <div className="columna-contenido">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-3" viewBox="0 0 16 16">
                  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z" />
                  <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
                <p className="experiencia-titulo">Corte más barba</p>
                <p>Disfruta el corte de cabello, más el perfilado de barba a un precio preferencial $15.000</p>
                <div className="badges-contenedor">
                  <span className="badge text-bg-primary">Limpieza facial</span>
                  <span className="badge text-bg-primary">Mejor precio</span>
                  <span className="badge text-bg-primary">Servicio completo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Precios;
