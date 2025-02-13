import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ItemForm = ({ onAddItem, existingItem, onUpdateItem }) => {
  const [item, setItem] = useState(
    existingItem || { id: "", name: "", calories: 0, image: "" }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingItem) {
      onUpdateItem(item);
    } else {
      onAddItem({ ...item, id: uuidv4() });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Name"
        value={item.name}
        onChange={(e) => setItem({ ...item, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Calories"
        value={item.calories}
        onChange={(e) => setItem({ ...item, calories: +e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={item.image}
        onChange={(e) => setItem({ ...item, image: e.target.value })}
        required
      />
      <button type="submit">{existingItem ? "Update" : "Add"} Recipe</button>
    </form>
  );
};

export default ItemForm;
