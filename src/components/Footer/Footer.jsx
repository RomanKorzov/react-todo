import styles from "./Footer.module.css";
import { Counter } from "../Counter/Counter";
import { Filter } from "../Filter/Filter";
import { ClearButton } from "../ClearButton/ClearButton";

export const Footer = ({ count, filter, onClearTodos, onFilterTodos }) => {
  return (
    <div className={styles.footer}>
      <Counter count={count} />
      <Filter filter={filter} onFilterTodos={onFilterTodos} />
      <ClearButton text="Clear All Todo" onClearTodos={onClearTodos} />
    </div>
  );
};
