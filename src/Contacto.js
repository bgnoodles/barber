function Contacto() {
  return (
    <div id="contacto">
      <section id="contacto" className="contacto seccion-oscura">
        <div className="container">
          <div className="container text-center rectangulo d-flex justify-content-evenly">
            <div className="row">
              <div className="col-12 col-md-4 seccion-titulo">
                Contactanos!
              </div>
              <div className="col-12 col-md-4 descripcion">
                Coordinemos tu visita a nuestra barberia
              </div>
              <div className="col-12 col-md-4">
                <a href="mailto:barberia@bcm.cl">
                  <button type="button">
                    contacto
                    <i className="bi bi-envelope-at-fill"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacto;