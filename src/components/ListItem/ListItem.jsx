import styles from "./ListItem.module.css";
import deleteIcon from "./../../assets/images/delete.png";

export const ListItem = ({ todo, onDeleteTodo, onToggleIsDone }) => {
  const styleText = () => {
    if (todo.isDone) {
      return `${styles.text} ${styles.completed}`;
    } else {
      return `${styles.text}`;
    }
  };

  return (
    <li className={`${styles.item}`}>
      <input
        type="checkbox"
        name="isDone"
        id={todo.id}
        checked={todo.isDone}
        onChange={() => onToggleIsDone(todo.id)}
      />
      <p className={styleText()}>{todo.text}</p>
      <button
        className={styles.deleteButton}
        onClick={(e) => onDeleteTodo(todo.id)}
      >
        <img
          src={deleteIcon}
          className={styles.deleteImage}
          alt="delete button"
          width="16"
          height="16"
        />
      </button>
    </li>
  );
};
