import React from "react";
import TodoItem from "./TodoItem";

// PUBLIC_INTERFACE
/**
 * Displays the list of notes/tasks with colors and controls.
 * @param {Object} props
 * @param {Array} props.tasks - List of tasks.
 * @param {Function} props.onToggleComplete
 * @param {Function} props.onDeleteTask
 * @param {Function} props.onEditTask
 */
function TodoList({ tasks, onToggleComplete, onDeleteTask, onEditTask }) {
  if (tasks.length === 0)
    return (
      <div style={{ marginTop: 200, textAlign: "center", color: "#fff" }}>
        <div>
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1d0e93f-e99d-4cd4-9cf9-65ab696dbde4"
            alt="Create your first note"
            style={{ width: 200, opacity: 0.75 }}
          />
        </div>
        <p style={{ margin: 16, fontSize: 23, fontWeight: 600, color: "#fff" }}>
          Create your first note!
        </p>
      </div>
    );
  return (
    <>
      {tasks.map((task, idx) => (
        <TodoItem
          task={task}
          key={task.id}
          color={task.color}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </>
  );
}

export default TodoList;
