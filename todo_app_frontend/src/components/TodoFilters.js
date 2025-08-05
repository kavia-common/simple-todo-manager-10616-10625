import React from "react";
import styles from "./TodoFilters.module.css";

// PUBLIC_INTERFACE
/**
 * Filtering and status tabs for All, Active, Completed.
 * @param {Object} props
 * @param {String} props.filter
 * @param {Function} props.onSetFilter
 */
function TodoFilters({ filter, onSetFilter }) {
  return (
    <div className={styles.filters}>
      <button
        className={filter === "all" ? styles.selected : ""}
        onClick={() => onSetFilter("all")}
      >
        All
      </button>
      <button
        className={filter === "active" ? styles.selected : ""}
        onClick={() => onSetFilter("active")}
      >
        Active
      </button>
      <button
        className={filter === "completed" ? styles.selected : ""}
        onClick={() => onSetFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilters;
