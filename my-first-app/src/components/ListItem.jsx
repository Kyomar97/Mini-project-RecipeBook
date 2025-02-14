import React from "react";
import { Link } from "react-router-dom";

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
        {item.name}
      </Link>
      <div className="flex space-x-2">
        <Link
          to={`/edit/${item.id}`}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(item.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ListItem;
