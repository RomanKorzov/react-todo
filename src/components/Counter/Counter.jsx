import styles from "./Counter.module.css";

export const Counter = ({ count }) => {
  return <span className={styles.counter}>{count} items left</span>;
};
