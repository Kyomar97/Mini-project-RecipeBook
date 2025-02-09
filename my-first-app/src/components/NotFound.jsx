import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-red-500">
        404 - Página No Encontrada ❌
      </h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="text-blue-500">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;
