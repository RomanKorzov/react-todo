import styles from "./ListItem.module.css";
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { IconTrash } from "@consta/uikit/IconTrash";
import { Checkbox } from "@consta/uikit/Checkbox";

export const ListItem = ({ todo, onDeleteTodo, onToggleIsDone }) => {
  return (
    <li className={`${styles.item}`}>
      <Checkbox
        view="primary"
        checked={todo.isDone}
        className={styles.checkbox}
        onChange={() => onToggleIsDone(todo.id)}
      />
      <Text className={styles.text}>{todo.text}</Text>
      <Button
        label="Delete todo"
        view="clear"
        iconLeft={IconTrash}
        className={styles.deleteButton}
        onlyIcon
        onClick={(e) => onDeleteTodo(todo.id)}
      ></Button>
    </li>
  );
};
