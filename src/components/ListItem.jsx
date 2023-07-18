export default function ListItem({ itemData, deleteToDo }) {
  // console.log({ itemData });
  return (
    <li className="p-2 bg-zinc-200 m-2 rounded flex">
      <span>{itemData.content}</span>
      <button
        onClick={() => deleteToDo(itemData.id)}
        className="ml-auto bg-red-600 w-6 h-6 rounded text-zinc-200"
      >
        x
      </button>
    </li>
  );
}
