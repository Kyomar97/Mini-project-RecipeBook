import React, { useState } from "react";
import ListItem from "./ListItem";
import { food } from "../jason";
import { Link } from "react-router-dom";

const List = () => {
  const [items, setItems] = useState(food);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Food List</h2>
      <ul>
        {items.map((item) => (
          <Link to={`/item/${item.id}`}>
            <ListItem key={item.id} item={item} onDelete={handleDelete} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default List;
