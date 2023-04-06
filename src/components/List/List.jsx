import styles from "./List.module.css";
import ListItem from "./ListItem/ListItem";

export default function List({ todos }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo}></ListItem>
      ))}
    </ul>
  );
}
