// src/App.js
import React, { useState } from "react";
import "./App.css"; // assuming you have default App.css from create-react-app
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { text, done: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Task Manager by Sufyan.</h1>
        <TaskInput onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onToggleDone={toggleTaskDone}
          onRemoveTask={removeTask}
        />
      </header>
    </div>
  );
}

export default App;
