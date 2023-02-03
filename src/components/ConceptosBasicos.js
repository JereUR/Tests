import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import { Dashboard } from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import { Products } from "../pages/Products";
import { User } from "../pages/User";
import { FormCustom } from "./FormCustom";
import { MenuConceptos } from "./MenuConceptos";
import PrivateRoute from "./PrivateRoute";

export const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Errores Custom en Formularios</h2>
      <FormCustom />
      <hr />
      <h2>Conceptos Básicos</h2>
      <Router>
        <MenuConceptos />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/user/:username" element={<User />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/acerca" element={<Navigate to="/about" />} />
          <Route exact path="/contacto" element={<Navigate to="/contact" />} />
          <Route exact path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route exact path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
};

/* export const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h3>Home</h3>
                <p>Welcome to React Router</p>
              </div>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <div>
                <About />
                <p>Lorem</p>
              </div>
            }
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}; */
