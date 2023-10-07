// src/components/TaskInput.js
import React from "react";

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;
