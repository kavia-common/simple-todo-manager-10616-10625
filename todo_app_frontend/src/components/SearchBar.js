import React, { useState } from "react";
import styles from "./SearchBar.module.css";

// PUBLIC_INTERFACE
/**
 * Search bar component for filtering tasks by input text.
 * @param {Function} props.onSearch
 */
function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  function handleChange(e) {
    setInput(e.target.value);
    onSearch(e.target.value);
  }
  return (
    <input
      className={styles.search}
      type="search"
      value={input}
      placeholder="Search notes..."
      onChange={handleChange}
      aria-label="Search notes"
    />
  );
}

export default SearchBar;
