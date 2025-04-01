import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('All');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-app p-3">
      <div className="container">
        <div className="card mb-3 shadow-sm">
          <h2 className="my-3 fw-semibold text-primary text-center">To-Do List</h2>
          <div className="card-body">
            <TaskForm addTask={addTask} className="mb-4" />

            <div className="row mb-4 text-center">
              <div className="col">
                <label htmlFor="category" className="form-label mt-4">Category</label>
                <select
                  id="category"
                  className="form-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="All">All Categories</option>
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                </select>
              </div>

              <div className="col">
                <label htmlFor="priority" className="form-label mt-4">Priority</label>
                <select
                  id="priority"
                  className="form-select"
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                >
                  <option value="All">All Priorities</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>

            <TaskList 
              tasks={tasks} 
              editTask={editTask} 
              deleteTask={deleteTask} 
              selectedCategory={selectedCategory} 
              selectedPriority={selectedPriority} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
