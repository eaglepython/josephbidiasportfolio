import React, { useState } from 'react';

const TaskManagementApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    const task = { id: Date.now(), title: newTask };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-4">Task Management App</h2>
      <input
        type="text"
        value={newTask}
        placeholder="Enter new task"
        onChange={(e) => setNewTask(e.target.value)}
        className="p-2 border border-gray-300 rounded mr-2"
      />
      <button onClick={addTask} className="px-4 py-2 bg-blue-500 text-white rounded">
        Add Task
      </button>
      <ul className="mt-4">
        {tasks.map((task) => (
          <li key={task.id} className="p-2 border-b">{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManagementApp;
