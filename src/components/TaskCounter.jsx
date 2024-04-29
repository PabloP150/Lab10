// TaskCounter.js
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export default function TaskCounter() {
  const { tasks } = useContext(TaskContext);
  const taskCount = tasks.length;

  return (
    <div className="text-white">
      <p>Total de tareas: {taskCount}</p>
    </div>
  );
}