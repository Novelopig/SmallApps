import React, { useState } from 'react';

const TaskItem = ({ task, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.task);
  const [updatedPriority, setUpdatedPriority] = useState(task.priority);
  const [updatedCategory, setUpdatedCategory] = useState(task.category);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, {
        ...task,
        task: updatedTask,
        priority: updatedPriority,
        category: updatedCategory,
      });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="task-item mb-3 p-3 bg-white border rounded shadow-sm">
      {isEditing ? (
        <div>
          <div className="mb-3">
            <input
              type="text"
              value={updatedTask}
              onChange={(e) => setUpdatedTask(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div className="w-45">
              <select
                value={updatedPriority}
                onChange={(e) => setUpdatedPriority(e.target.value)}
                className="form-select"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="w-45">
              <select
                value={updatedCategory}
                onChange={(e) => setUpdatedCategory(e.target.value)}
                className="form-select"
              >
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
              </select>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h5 className="mb-2">{task.task}</h5>
          <div className="task-info text-muted mb-2">
            <span className="task-category me-2">{task.category}</span>|
            <span className={`task-priority ms-2 ${task.priority}`}>{task.priority}</span>
          </div>
        </div>
      )}

      <div className="task-actions d-flex justify-content-end">
        <button
          onClick={handleEdit}
          className="btn btn-sm btn-warning me-2"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
