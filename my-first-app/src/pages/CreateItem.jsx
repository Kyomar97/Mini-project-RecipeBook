import React, { useState } from "react";

function CreateItem({ onAdd }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded w-full"
      >
        Add
      </button>
    </form>
  );
}

export default CreateItem;
