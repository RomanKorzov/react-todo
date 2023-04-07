import styles from "./Filter.module.css";
import { FilterButton } from "../FilterButton/FilterButton";

export const Filter = ({ filter, onFilterTodos }) => {
  return (
    <div className={styles.filter}>
      <FilterButton
        label="All"
        filter="all"
        onFilterTodos={onFilterTodos}
        isActive={filter === "all"}
      />
      <FilterButton
        label="Active"
        filter="active"
        onFilterTodos={onFilterTodos}
        isActive={filter === "active"}
      />
      <FilterButton
        label="Completed"
        filter="completed"
        onFilterTodos={onFilterTodos}
        isActive={filter === "completed"}
      />
    </div>
  );
};
