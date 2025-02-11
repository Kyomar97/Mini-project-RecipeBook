import React, { useState } from "react";

const ItemForm = ({ onAddItem, existingItem, onUpdateItem }) => {
  const [item, setItem] = useState(
    existingItem || { name: "", calories: "", image: "" }
  );

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingItem) {
      onUpdateItem(item);
    } else {
      onAddItem({ ...item, id: Date.now().toString() });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded">
      <input
        name="name"
        value={item.name}
        onChange={handleChange}
        placeholder="Name"
        className="p-2 border rounded"
      />
      <input
        name="calories"
        value={item.calories}
        onChange={handleChange}
        placeholder="Calories"
        className="p-2 border rounded"
      />
      <input
        name="image"
        value={item.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        {existingItem ? "Update" : "Add"} Item
      </button>
    </form>
  );
};

export default ItemForm;
