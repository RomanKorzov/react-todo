import styles from "./ListItem.module.css";
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { IconTrash } from "@consta/uikit/IconTrash";
import { Checkbox } from "@consta/uikit/Checkbox";
import { useContext } from "react";
import { TodoContext } from "../../context";

export const ListItem = ({ todo }) => {
  const { deleteTodo, toggleIsDone } = useContext(TodoContext);

  return (
    <li className={`${styles.item}`} data-test="list-item">
      <Checkbox
        view="primary"
        checked={todo.isDone}
        className={styles.checkbox}
        onChange={() => toggleIsDone(todo.id)}
        data-test="checkbox"
      />
      <Text className={styles.text}>{todo.text}</Text>
      <Button
        label="Delete todo"
        view="clear"
        iconLeft={IconTrash}
        className={styles.deleteButton}
        onlyIcon
        onClick={() => deleteTodo(todo.id)}
        data-test="delete"
      ></Button>
    </li>
  );
};
