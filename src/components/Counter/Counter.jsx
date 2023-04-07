import styles from "./Counter.module.css";
import { Text } from "@consta/uikit/Text";

export const Counter = ({ count }) => {
  return (
    <div className={styles.counter}>
      <Text as="span">{count} items left</Text>
    </div>
  );
};
