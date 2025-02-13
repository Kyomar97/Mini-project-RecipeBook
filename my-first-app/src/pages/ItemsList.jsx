import React, { useState } from "react";
import { Link } from "react-router-dom";
import { food } from "../data/food";

function ListItem({ item, onDelete }) {
  return (
    <li className="p-4 border-b flex justify-between items-center bg-white shadow-md rounded-lg my-2">
      <Link
        to={`/item/${item.id}`}
        className="text-blue-600 font-semibold hover:underline flex items-center"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        {item.name} - {item.calories} calories
      </Link>
      <button
        onClick={() => onDelete(item.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
      >
        Delete
      </button>
    </li>
  );
}

function ItemsList() {
  const [items, setItems] = useState(food);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Recipe List
      </h2>
      <ul className="bg-gray-100 p-4 rounded-lg shadow-lg">
        {items.length === 0 ? (
          <p className="text-center text-gray-600">No items found.</p>
        ) : (
          items.map((item) => (
            <ListItem key={item.id} item={item} onDelete={handleDelete} />
          ))
        )}
      </ul>
    </div>
  );
}

export default ItemsList;
