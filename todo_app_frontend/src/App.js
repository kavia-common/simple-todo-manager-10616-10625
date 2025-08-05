import React from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";

// PUBLIC_INTERFACE
/**
 * Entrypoint for the Todo Notes app following the Figma-based design.
 */
function App() {
  return (
    <div className="App" style={{ minHeight: "100vh", background: "var(--color-252525)" }}>
      <TodoApp />
    </div>
  );
}

export default App;
