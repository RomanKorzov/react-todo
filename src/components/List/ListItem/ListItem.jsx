import styles from "./ListItem.module.css";
import deleteIcon from "./../../../assets/images/delete.png";

export default function ListItem({ todo }) {
  return (
    <li className={`${styles.item}`}>
      <input type="checkbox" name="isDone" />
      <p>{todo.text}</p>
      <button className={styles.deleteButton}>
        <img src={deleteIcon} alt="delete button" width="16" height="16" />
      </button>
    </li>
  );
}
