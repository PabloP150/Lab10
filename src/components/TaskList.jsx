// TaskList.js
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskCard from './TaskCard'; // Asumiendo que tienes un componente TaskCard

export default function TaskList() {
  const { tasks, deleteAllTasks } = useContext(TaskContext);
  
  if(tasks.length===0){
    return (
      <div className="container">
        <h1 className="text-white text-4xl font-bold text-center">No hay tareas aún</h1>
      </div>
    );
  }
  
  return (
    <div className="container">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">Total de tareas: {tasks.length}</h2>
        <button 
          className="bg-red-500 px-3 py-1 rounded-md text-white"
          onClick={deleteAllTasks}
        >
          Eliminar todas las tareas
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
