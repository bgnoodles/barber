import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuNavegacion from "./MenuNavegacion";
import SobreLaBarberia from './SobreLaBarberia';
import Cortes from './Cortes';
import Precios from './Precios';
import Contacto from './Contacto';
import './App.css';
import Hero from "./Hero";
import Footer from "./Footer";


function Home() {
  return (
    <Router>
      <MenuNavegacion />
      <Routes>
        <Route path="/sobreLaBarberia" element={<SobreLaBarberia />} />
        <Route path="/cortes" element={<Cortes />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

        <Hero />
        <SobreLaBarberia />
        <Precios />
        <Cortes />
        <Contacto />
        <Footer />

    </Router>
  );
}

export default Home;
