import styles from "./Filter.module.css";
import { Button } from "./Button/Button";

export function Filter({ filter, onFilterTodos }) {
  return (
    <div className={styles.filter}>
      <Button
        text="All"
        id="filter-all"
        filter="all"
        onFilterTodos={onFilterTodos}
        isActive={filter === "all"}
      />
      <Button
        text="Active"
        id="filter-active"
        filter="active"
        onFilterTodos={onFilterTodos}
        isActive={filter === "active"}
      />
      <Button
        text="Completed"
        id="filter-completed"
        filter="completed"
        onFilterTodos={onFilterTodos}
        isActive={filter === "completed"}
      />
    </div>
  );
}
