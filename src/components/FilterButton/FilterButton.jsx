import styles from "./FilterButton.module.css";

export const FilterButton = ({ text, id, filter, onFilterTodos, isActive }) => {
  const styleButton = () => {
    if (isActive) {
      return `${styles.button} ${styles.active}`;
    } else {
      return `${styles.button}`;
    }
  };

  return (
    <button
      className={styleButton()}
      id={id}
      onClick={() => onFilterTodos(filter)}
    >
      {text}
    </button>
  );
};
