import React, { useState } from "react";
import styles from "./TodoItem.module.css";

// PUBLIC_INTERFACE
/**
 * Single Todo item, colored and styled per design, editable, togglable.
 * @param {Object} props
 * @param {Object} props.task
 * @param {String} props.color
 * @param {Function} props.onToggleComplete
 * @param {Function} props.onDeleteTask
 * @param {Function} props.onEditTask
 */
function TodoItem({ task, color, onToggleComplete, onDeleteTask, onEditTask }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(task.text);

  // Save edit
  function handleSaveEdit() {
    onEditTask(task.id, value);
    setEditing(false);
  }

  let cardClass = styles.noteCard + " note-card card-" + color;

  return (
    <div className={cardClass}>
      <div
        className={styles.noteCardHeader}
        style={{
          textDecoration: task.status === "completed" ? "line-through" : "none",
          opacity: task.status === "completed" ? 0.6 : 1
        }}
      >
        <input
          type="checkbox"
          className={styles.completeCheckbox}
          checked={task.status === "completed"}
          onChange={() => onToggleComplete(task.id)}
          title="Mark as completed"
        />
        {editing ? (
          <input
            autoFocus
            className={styles.editInput}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleSaveEdit}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSaveEdit();
              if (e.key === "Escape") setEditing(false);
            }}
            style={{ width: "80%" }}
            aria-label="Edit note"
          />
        ) : (
          <span
            className="note-card-title typo-13"
            onClick={() => setEditing(true)}
            title="Edit note"
          >
            {task.text}
          </span>
        )}
      </div>
      <div className={styles.actions}>
        <button
          className={styles.iconBtn}
          title="Edit"
          aria-label="Edit note"
          onClick={() => setEditing(true)}
        >
          ✎
        </button>
        <button
          className={styles.iconBtn}
          title="Delete"
          aria-label="Delete note"
          onClick={() => onDeleteTask(task.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
