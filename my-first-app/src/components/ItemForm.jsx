import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ItemForm = ({ onAddItem, existingItem, onUpdateItem }) => {
  const [item, setItem] = useState(
    existingItem || { id: "", name: "", calories: 0, image: "" }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.calories <= 0) {
      alert("Calories must be a positive number.");
      return;
    }
    if (existingItem) {
      onUpdateItem(item);
    } else {
      onAddItem({ ...item, id: uuidv4() });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Calories"
          value={item.calories}
          onChange={(e) => setItem({ ...item, calories: +e.target.value })}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={item.image}
          onChange={(e) => setItem({ ...item, image: e.target.value })}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          {existingItem ? "Update" : "Add"} Recipe
        </button>
        {existingItem && (
          <button
            type="button"
            onClick={() => onUpdateItem(null)}
            className="w-full bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ItemForm;
