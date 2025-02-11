import React from "react";

const ListItem = ({ item, onDelete }) => {
  return (
    <li className="flex items-center justify-between border-b p-2">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-12 h-12 mr-4" />
        <div>
          <h3 className="font-bold">{item.name}</h3>
          <p>Calories: {item.calories}</p>
          {item.calories > 300 ? (
            <span>🔥 High Calorie</span>
          ) : (
            <span>✅ Healthy</span>
          )}
        </div>
      </div>
      <button
        onClick={() => onDelete(item.id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default ListItem;
