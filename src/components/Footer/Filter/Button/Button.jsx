import styles from "./Button.module.css";

export function Button({ text, id, filter, onFilterTodos, isActive }) {
  function styleButton() {
    if (isActive) {
      return `${styles.button} ${styles.active}`;
    } else {
      return `${styles.button}`;
    }
  }

  return (
    <button
      className={styleButton()}
      id={id}
      onClick={() => onFilterTodos(filter)}
    >
      {text}
    </button>
  );
}
