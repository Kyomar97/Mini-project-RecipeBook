import React, { useState } from "react";
import ListItem from "./ListItem";

const initialData = [
  {
    id: "1",
    name: "Pizza",
    calories: 400,
    image: "https://i.imgur.com/eTmWoAN.png",
  },
  {
    id: "2",
    name: "Salad",
    calories: 150,
    image: "https://i.imgur.com/DupGBz5.jpg",
  },
];

const List = () => {
  const [items, setItems] = useState(initialData);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Food List</h2>
      <ul>
        {items.map((item) => (
          <ListItem key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default List;
