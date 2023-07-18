import { useState } from "react";
// Importation du use state

import { nanoid } from "nanoid";
// Nano ID crée un nb aléatoire pour les keys

import ListItem from "./components/ListItem";

function App() {
  // Initialisation des variables
  const [toDoList, setToDoList] = useState([
    { id: nanoid(8), content: "item 1" },
    { id: nanoid(8), content: "item 2" },
    { id: nanoid(8), content: "item 3" },
  ]);
  const [toDo, setToDo] = useState("");
  const [showValidation, setShowValadidation] = useState(false);

  function deleteToDo(id) {
    // Supprime un item de la liste
    console.log(id);
    setToDoList(toDoList.filter((todo) => todo.id !== id));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (toDo === "") {
      // Affiche une validation si la tâche est vide
      setShowValadidation(true);
      return;
    }
    // Ajoute une nouvelle tâche à la liste
    setToDoList([...toDoList, { id: nanoid, content: toDo }]);
    setToDo("");
    setShowValadidation(false);
    console.log(toDoList);
  }

  return (
    // Retourne le composant React
    <div className="h-screen  ">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">Ma ToDo Liste</h1>
        <form className="mb-10" onSubmit={handleSubmit}>
          <label htmlFor="todo-item" className="text-slate-50">
            Ajouter une chose a faire
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded"
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
          />
          {showValidation && (
            <p className="text-red-400">Ajouter dabord une tache</p>
          )}
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">
            Ajouter
          </button>
        </form>
        <ul>
          {toDoList.length === 0 && (
            // Affiche un message si la liste est vide
            <li className="text-slate-100 text-xl">Pas d'item a afficher...</li>
          )}
          {toDoList.length > 0 &&
            toDoList.map((item) => (
              // Affiche chaque item de la liste
              <ListItem key={item.id} itemData={item} deleteToDo={deleteToDo} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;