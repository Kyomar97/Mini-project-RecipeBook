import React, { useState } from "react";
import List from "../components/List";
import ItemForm from "../components/ItemForm";

const Dashboard = () => {
  const [items, setItems] = useState([
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
  ]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {/* Formulario para agregar elementos */}
      <ItemForm onAddItem={addItem} />
      {/* Lista de elementos */}
      <List items={items} setItems={setItems} />
    </div>
  );
};

export default Dashboard;
