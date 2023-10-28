import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({
    text: " ",
    category: "Code",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const filteredCategories = categories.filter(
    (category) => category !== "All"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    onTaskFormSubmit(newTask);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input onChange={handleChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category">
          {/* render <option> elements for each category here */}
          {filteredCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
