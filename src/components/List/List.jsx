import styles from "./List.module.css";
import { ListItem } from "./ListItem/ListItem";

export function List({ todos, onDeleteTodo, onToggleIsDone }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleIsDone={onToggleIsDone}
        />
      ))}
    </ul>
  );
}
