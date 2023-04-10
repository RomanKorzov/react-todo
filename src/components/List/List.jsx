import styles from "./List.module.css";
import { ListItem } from "../ListItem/ListItem";
import { useContext } from "react";
import { TodoContext } from "../../context";

export const List = () => {
  const { filteredTodos } = useContext(TodoContext);

  return (
    <ul className={styles.list} data-test="list">
      {filteredTodos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
