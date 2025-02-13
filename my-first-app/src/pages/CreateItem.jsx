import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function CreateItem({ onAdd }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (calories <= 0) {
      setError("Calories must be a positive number.");
      return;
    }
    setError("");
    const newItem = {
      id: Date.now().toString(),
      name,
      calories,
      image,
      servings: 1,
    };
    onAdd(newItem);
    setName("");
    setCalories("");
    setImage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Add New Recipe</h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <input
        type="text"
        placeholder="Image URL (optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded w-full flex items-center justify-center"
      >
        <FaPlus className="mr-2" /> Add to list
      </button>
    </form>
  );
}

export default CreateItem;
