import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ItemForm from "../components/ItemForm";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({
    name: "Example",
    calories: 100,
    image: "https://i.imgur.com/eTmWoAN.png",
  });

  const updateItem = (updatedItem) => {
    setItem(updatedItem);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Item Details - {id}</h1>
      {/* Formulario para actualizar elementos */}
      <ItemForm existingItem={item} onUpdateItem={updateItem} />
    </div>
  );
};

export default ItemDetails;
