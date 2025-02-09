import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const items = [
  {
    id: "1",
    name: "Pizza",
    calories: 400,
    image: "https://i.imgur.com/eTmWoAN.png",
    servings: 1,
  },
  {
    id: "2",
    name: "Salad",
    calories: 150,
    image: "https://i.imgur.com/DupGBz5.jpg",
    servings: 1,
  },
  {
    id: "3",
    name: "Sweet Potato",
    calories: 120,
    image: "https://i.imgur.com/hGraGyR.jpg",
    servings: 1,
  },
];

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = items.find((item) => item.id === id);

  if (!item) {
    return (
      <h1 className="text-2xl font-bold text-red-500">
        Receta no encontrada ❌
      </h1>
    );
  }

  return (
    <div>
      <button onClick={() => navigate(-1)} className="text-blue-500">
        ← Volver
      </button>
      <h1 className="text-2xl font-bold">{item.name}</h1>
      <img
        src={item.image}
        alt={item.name}
        className="w-64 h-64 object-cover rounded-lg"
      />
      <p>Calorías: {item.calories}</p>
      <p>Porciones: {item.servings}</p>
    </div>
  );
};

export default ItemDetails;
