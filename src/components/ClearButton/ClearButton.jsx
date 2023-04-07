import styles from "./ClearButton.module.css";

export const ClearButton = ({ text, onClearTodos }) => {
  return (
    <button className={styles.button} onClick={onClearTodos}>
      {text}
    </button>
  );
};
