import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "bootstrap/dist/css/bootstrap.css";

function MenuNavegacion() {
  const [activeLink, setActiveLink] = useState("");

  const handleMouseEnter = (option) => {
    setActiveLink(option);
  };

  const handleMouseLeave = () => {
    setActiveLink("");
  };

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <div className="logo-container">
          <Link smooth to="#">
            <img className="imagen" src="icoBarberia.png" width="50" alt="Logo de la pagina web" />
          </Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                smooth
                to="#sobreLaBarberia"
                className={`nav-link ${activeLink === "sobreLaBarberia" ? "active" : ""}`}
                style={{ color: activeLink === "sobreLaBarberia" ? "#7ade30" : "#ffffff" }}
                onMouseEnter={() => handleMouseEnter("sobreLaBarberia")}
                onMouseLeave={handleMouseLeave}
              >
                Sobre La Barberia
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="#cortes"
                className={`nav-link ${activeLink === "cortes" ? "active" : ""}`}
                style={{ color: activeLink === "cortes" ? "#7ade30" : "#ffffff" }}
                onMouseEnter={() => handleMouseEnter("cortes")}
                onMouseLeave={handleMouseLeave}
              >
                Cortes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="#precios"
                className={`nav-link ${activeLink === "precios" ? "active" : ""}`}
                style={{ color: activeLink === "precios" ? "#7ade30" : "#ffffff" }}
                onMouseEnter={() => handleMouseEnter("precios")}
                onMouseLeave={handleMouseLeave}
              >
                Precios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="#contacto"
                className={`nav-link ${activeLink === "contacto" ? "active" : ""}`}
                style={{ color: activeLink === "contacto" ? "#7ade30" : "#ffffff" }}
                onMouseEnter={() => handleMouseEnter("contacto")}
                onMouseLeave={handleMouseLeave}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MenuNavegacion;
