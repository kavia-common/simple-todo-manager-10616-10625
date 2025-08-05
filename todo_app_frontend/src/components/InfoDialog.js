import React from "react";
import styles from "./InfoDialog.module.css";

// PUBLIC_INTERFACE
/**
 * A modal popup showing attributions, based on Figma.
 * @param {Function} props.onClose
 */
function InfoDialog({ onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <h2>About</h2>
        <p>
          Design system and icons adapted from Figma. <br />
          Illustrations by <a href="https://storyset.com/">Storyset</a>.
        </p>
        <p>
          <b>Developed as a demo Todo Notes app.<br/>
            Redesigned for Kavia by AI.</b>
        </p>
        <button className={styles.closeBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default InfoDialog;
