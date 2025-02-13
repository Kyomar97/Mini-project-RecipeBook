import { useParams, useNavigate } from "react-router-dom";
import { food } from "../data/food";

function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = food.find((foodItem) => foodItem.id === id);

  if (!item) {
    return (
      <p className="p-4 text-center text-red-600 font-bold">Item not found!</p>
    );
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        {item.name}
      </h2>
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover rounded-lg mt-4"
      />
      <div className="mt-4 text-lg text-gray-700">
        <p>
          <strong>Calories:</strong> {item.calories}
        </p>
        <p>
          <strong>Servings:</strong> {item.servings}
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default ItemDetails;
