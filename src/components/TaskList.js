import React, { useEffect, useState } from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory, handleDeleteTask }) {
  const filteredTasks = tasks.filter(
    (task) => selectedCategory === task.category
  );

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          task={task}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
