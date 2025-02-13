import React from "react";
import { Link } from "react-router-dom";

function ListItem({ item, onDelete }) {
  return (
    <li className="p-4 border-b flex justify-between items-center bg-white shadow-md rounded-lg my-4">
      <Link
        to={`/item/${item.id}`}
        className="block p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 flex items-center"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-full mr-4"
        />
        <span className="text-gray-800 font-semibold">
          {item.name} - {item.calories} calories
        </span>
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

export default ListItem;
