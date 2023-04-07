import styles from "./ClearButton.module.css";

export function ClearButton({ text, onClearTodos }) {
  return (
    <button className={styles.button} onClick={onClearTodos}>
      {text}
    </button>
  );
}
