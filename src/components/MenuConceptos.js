import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./PrivateRoute";

export const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Enlaces HTML (no recomendado): </span>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <span>Componente Link: </span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span>Componente NavLink: </span>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
        </li>
        <li>
          <span>Parámetros: </span>
          <Link to="/user/Jere">Jere</Link>
          <Link to="/user/Leito">Leito</Link>
        </li>
        <li>
          <span>Parámetros de Consulta: </span>
          <Link to="/products">Productos</Link>
        </li>
        <li>
          <span>Redirecciones: </span>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <span>Rutas Anidadas: </span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas Privadas: </span>
          <Link to="/login">Login</Link>
          {useAuth() && <Link to="/dashboard">Dashboard</Link>}
        </li>
      </ol>
    </nav>
  );
};
