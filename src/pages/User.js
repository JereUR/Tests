import React from "react";
import { useParams } from "react-router-dom";

export const User = () => {
  let { username } = useParams();

  return (
    <div>
      <h3>Perfil del usuario</h3>
      <p>
        Nombre del usuario <b>{username}</b>
      </p>
    </div>
  );
};
