// TaskContext.js
import { createContext, useState, useEffect } from "react";
import { Tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export default function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        descripcion: task.descripcion,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  
  function deleteAllTasks() {
    setTasks([]);
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        deleteAllTasks // Agregamos la función deleteAllTasks al contexto
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
