import styles from "./Counter.module.css";

export function Counter({ count }) {
  return <span className={styles.counter}>{count} items left</span>;
}
