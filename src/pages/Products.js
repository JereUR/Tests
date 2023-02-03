import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Products = () => {
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  const LIMIT = 20;

  let start = parseInt(query.get("start")) || 1;
  let end = parseInt(query.get("end")) || LIMIT;

  let history = useNavigate();

  const handlePrev = (e) => {
    history({ search: `?start=${start - LIMIT}&end=${end - LIMIT}` });
  };

  const handleNext = (e) => {
    history({ search: `?start=${start + LIMIT}&end=${end + LIMIT}` });
  };

  return (
    <div>
      <h3>Products</h3>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Atras</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};
