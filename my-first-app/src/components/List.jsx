import React from "react";
import ListItem from "./ListItem";

function List({ items, onDelete }) {
  return (
    <ul className="bg-white shadow-md rounded p-4">
      {items.map((item) => (
        <ListItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default List;
