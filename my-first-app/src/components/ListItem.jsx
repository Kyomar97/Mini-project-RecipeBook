import React from "react";
import { Link } from "react-router-dom";

function ListItem({ item, onDelete }) {
  return (
    <li className="p-4 border-b flex justify-between items-center bg-white shadow-md rounded-lg my-2 hover:shadow-lg transition-shadow">
      <Link
        to={`/item/${item.id}`}
        className="flex items-center space-x-4 w-full hover:bg-gray-50 p-3 rounded-lg transition-colors"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-500">Click for details</p>
        </div>
      </Link>
      <button
        onClick={() => onDelete(item.id)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
      >
        Delete
      </button>
    </li>
  );
}

export default ListItem;
