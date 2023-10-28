import React, { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const renderedTasks = tasks.filter((task) => {
    if (selectedCategory === "All") return true;

    return selectedCategory === task.category;
  });

  const onTaskFormSubmit = (newItem) => {
    setTasks([...tasks, newItem]);
  };

  const handleDeleteTask = (deletedTask) => {
    const filteredTasks = tasks.filter(
      (task) => task.text !== deletedTask.text
    );

    setTasks(filteredTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        selectedCategory={selectedCategory}
        tasks={renderedTasks}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
