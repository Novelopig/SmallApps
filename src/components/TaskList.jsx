import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, editTask, deleteTask, selectedCategory, selectedPriority }) => {
  const filteredTasks = tasks.filter(task => {
    const matchesCategory = selectedCategory === 'All' || task.category === selectedCategory;
    const matchesPriority = selectedPriority === 'All' || task.priority === selectedPriority;
    return matchesCategory && matchesPriority;
  });

  return (
    <div className="task-list mt-4">
      {filteredTasks.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          None
        </div>
      ) : (
        filteredTasks.map((task) => (
          <div className="task-item mb-3 p-3 bg-white border rounded shadow-sm" key={task.id}>
            <TaskItem
              task={task}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
