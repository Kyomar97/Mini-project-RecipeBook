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
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Update Food Item</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Calories</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Update Item
        </button>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="w-full bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default UpdateItem;
