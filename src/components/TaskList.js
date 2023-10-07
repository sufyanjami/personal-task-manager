// src/components/TaskList.js
import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggleDone, onRemoveTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onToggleDone={() => onToggleDone(index)}
          onRemoveTask={() => onRemoveTask(index)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
