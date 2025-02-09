import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListItem from "./ListItem";

const initialRecipes = [
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

const List = () => {
  const [recipes, setRecipes] = useState(initialRecipes);

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Lista de Recetas 🍽️</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <ListItem key={recipe.id} recipe={recipe} onDelete={deleteRecipe} />
        ))}
      </div>
    </div>
  );
};

export default List;
