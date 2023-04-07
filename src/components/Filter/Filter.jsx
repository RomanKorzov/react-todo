import styles from "./Filter.module.css";
import { FilterButton } from "../FilterButton/FilterButton";

export const Filter = ({ filter, onFilterTodos }) => {
  return (
    <div className={styles.filter}>
      <FilterButton
        text="All"
        id="filter-all"
        filter="all"
        onFilterTodos={onFilterTodos}
        isActive={filter === "all"}
      />
      <FilterButton
        text="Active"
        id="filter-active"
        filter="active"
        onFilterTodos={onFilterTodos}
        isActive={filter === "active"}
      />
      <FilterButton
        text="Completed"
        id="filter-completed"
        filter="completed"
        onFilterTodos={onFilterTodos}
        isActive={filter === "completed"}
      />
    </div>
  );
};
