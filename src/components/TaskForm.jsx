import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Low');
  const [category, setCategory] = useState('Work');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({
        id: Date.now(),
        task,
        priority,
        category,
        completed: false,
      });
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form mb-4">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="form-control text-center"
        />
      </div>

      <div className="mb-3">
        <div className="w-45 mb-3">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="form-select"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        
        <div className="w-45">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-select"
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
