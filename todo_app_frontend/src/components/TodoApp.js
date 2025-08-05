import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFilters from "./TodoFilters";
import InfoDialog from "./InfoDialog";
import SearchBar from "./SearchBar";
import styles from "./TodoApp.module.css";

// PUBLIC_INTERFACE
/**
 * Root component for the Todo application.
 * Handles state and core logic for task CRUD, completion, and filtering.
 */
function TodoApp() {
  const [tasks, setTasks] = useState([
    // Initial example tasks for demo purposes – replace with backend fetch if needed
    {
      id: 1,
      text: "Book Review : The Design of Everyday Things by Don Norman",
      status: "active",
      color: "red"
    },
    {
      id: 2,
      text: "Animes produced by Ufotable",
      status: "completed",
      color: "green"
    },
    {
      id: 3,
      text: "Mangas planned to read",
      status: "active",
      color: "yellow"
    },
    {
      id: 4,
      text: "Awesome tweets collection",
      status: "active",
      color: "blue"
    },
    {
      id: 5,
      text: "List of free & open source apps",
      status: "active",
      color: "purple"
    }
  ]);
  const [filter, setFilter] = useState("all"); // all | active | completed
  const [infoOpen, setInfoOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const nextId = useRef(6);

  // PUBLIC_INTERFACE
  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId.current++,
        text: text.trim(),
        status: "active",
        color: getNextColor()
      }
    ]);
  }

  // PUBLIC_INTERFACE
  function handleEditTask(id, newText) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText.trim() } : task
      )
    );
  }

  // PUBLIC_INTERFACE
  function handleToggleComplete(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "completed" ? "active" : "completed" }
          : task
      )
    );
  }

  // PUBLIC_INTERFACE
  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // PUBLIC_INTERFACE
  function handleSetFilter(newFilter) {
    setFilter(newFilter);
  }

  // PUBLIC_INTERFACE
  function handleSearch(text) {
    setSearchText(text);
  }

  // PUBLIC_INTERFACE
  function handleShowInfo() {
    setInfoOpen(true);
  }
  function handleHideInfo() {
    setInfoOpen(false);
  }

  function getNextColor() {
    const colorOrder = ["red", "green", "yellow", "blue", "purple"];
    const count = tasks.length;
    return colorOrder[count % colorOrder.length];
  }

  // Filter and search
  const filtered = tasks.filter((task) => {
    if (filter === "active" && task.status !== "active") return false;
    if (filter === "completed" && task.status !== "completed") return false;
    if (searchText && !task.text.toLowerCase().includes(searchText.toLowerCase()))
      return false;
    return true;
  });

  return (
    <div className={styles.homeScreenFrame + " home-screen-frame ds-bg-dark"}>
      <div className={styles.heroTitle + " hero-title"}>
        <span className="typo-14">Notes</span>
      </div>
      <div className={styles.topBar + " top-bar"}>
        <button
          className="button-circle"
          onClick={handleShowInfo}
          title="Info"
          aria-label="Show Info"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="12" fill="#3b3b3b" />
            <path
              d="M12 9V13M12 17H12.01M12 21C6.477 21 2 16.523 2 11C2 5.477 6.477 1 12 1C17.523 1 22 5.477 22 11C22 16.523 17.523 21 12 21Z"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <SearchBar onSearch={handleSearch} />
      </div>
      <TodoFilters filter={filter} onSetFilter={handleSetFilter} />
      <TodoList
        tasks={filtered}
        onToggleComplete={handleToggleComplete}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />
      <TodoForm onAddTask={handleAddTask} />
      <div className={styles.addFab + " add-fab"} title="Add note">
        <button
          className={styles.fabButton}
          aria-label="Add note"
          onClick={() => {
            document.getElementById("add-todo-input")?.focus();
          }}
        >
          <svg
            className="fab-icon-img"
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
          >
            <circle cx="24" cy="24" r="24" fill="#252525" />
            <path
              d="M24 14v20M14 24h20"
              stroke="#fff"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {infoOpen && <InfoDialog onClose={handleHideInfo} />}
    </div>
  );
}

export default TodoApp;
