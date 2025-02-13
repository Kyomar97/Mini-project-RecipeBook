import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { food } from "../data/food";

function UpdateItem({ onUpdate }) {
  const { id } = useParams();
  const existingItem = food.find((item) => item.id === id);

  const [name, setName] = useState(existingItem.name);
  const [calories, setCalories] = useState(existingItem.calories);
  const [image, setImage] = useState(existingItem.image);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(id, { name, calories: parseInt(calories), image, servings: 1 });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-bold">Update Food Item</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border p-2 block w-full mt-2"
      />
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        required
        className="border p-2 block w-full mt-2"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
        className="border p-2 block w-full mt-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">
        Update Item
      </button>
    </form>
  );
}

export default UpdateItem;
