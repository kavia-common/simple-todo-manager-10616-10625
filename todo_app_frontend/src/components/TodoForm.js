import React, { useState } from "react";
import styles from "./TodoForm.module.css";

// PUBLIC_INTERFACE
/**
 * Form for adding a new note/task.
 * @param {Object} props
 * @param {Function} props.onAddTask
 */
function TodoForm({ onAddTask }) {
  const [value, setValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const text = value.trim();
    if (text.length > 0) {
      onAddTask(text);
      setValue("");
    }
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        id="add-todo-input"
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new note..."
        maxLength={200}
        aria-label="New note title"
        autoComplete="off"
      />
      <button className={styles.addBtn} type="submit" title="Add note">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
