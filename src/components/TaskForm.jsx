// TaskForm.js
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const hanlderSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    settitle("");
    setdescription("");
  };
  return (
    <div className=" max-w-md mx-auto">
      <form onSubmit={hanlderSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className=" text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Ecribe tu tarea"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setdescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
        />

        <button className=" bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}
