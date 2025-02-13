import ListItem from "./ListItem";

function List({ items, onDelete }) {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg grid grid-cols-3 gap-6">
      {items.map((item) => (
        <ListItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default List;
