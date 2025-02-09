import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ recipe, onDelete }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{recipe.name}</h3>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <p>Calorías: {recipe.calories}</p>
      <p>Porciones: {recipe.servings}</p>
      <div className="mt-2">
        <Link to={`/item/${recipe.id}`} className="text-blue-500 mr-4">
          Ver Detalles
        </Link>
        <button onClick={() => onDelete(recipe.id)} className="text-red-500">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ListItem;
