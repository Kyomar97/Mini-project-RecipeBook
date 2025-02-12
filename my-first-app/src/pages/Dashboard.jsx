import React, { useState } from "react";
import List from "../components/List";
import ItemForm from "../components/ItemForm";
import { food } from "../jason";

const Dashboard = () => {
  const [items, setItems] = useState([food]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      {/* Formulario para agregar elementos */}
      <ItemForm onAddItem={addItem} />
      {/* Lista de elementos */}
      <List items={items} setItems={setItems} />
    </div>
  );
};

export default Dashboard;
