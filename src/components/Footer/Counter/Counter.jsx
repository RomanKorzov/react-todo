import styles from "./Counter.module.css";

export default function Counter({ count }) {
  return <span className={styles.counter}>{count} items left</span>;
}
