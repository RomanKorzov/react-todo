import { useContext } from "react";
import styles from "./Counter.module.css";
import { Text } from "@consta/uikit/Text";
import { TodoContext } from "../../context";

export const Counter = () => {
  const { countActiveTodos } = useContext(TodoContext);
  return (
    <div className={styles.counter} data-test="counter">
      <Text as="span">{countActiveTodos()} items left</Text>
    </div>
  );
};
