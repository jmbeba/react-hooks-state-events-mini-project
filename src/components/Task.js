import React from "react";

function Task({ text, category, task, handleDeleteTask}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => handleDeleteTask(task)} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;
