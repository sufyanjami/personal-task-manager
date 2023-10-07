// src/components/TaskItem.js
import React from "react";

const TaskItem = ({ task, onToggleDone, onRemoveTask }) => {
  return (
    <li style={{ textDecoration: task.done ? "line-through" : "none" }}>
      {task.text}
      <button onClick={onToggleDone}>Toggle Done</button>
      <button onClick={onRemoveTask}>Remove</button>
    </li>
  );
};

export default TaskItem;
