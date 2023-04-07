import styles from "./Filter.module.css";
import { FilterButton } from "../FilterButton/FilterButton";
import { useContext } from "react";
import { TodoContext } from "../../context";

export const Filter = () => {
  const { filter } = useContext(TodoContext);

  return (
    <div className={styles.filter}>
      <FilterButton label="All" filter="all" isActive={filter === "all"} />
      <FilterButton
        label="Active"
        filter="active"
        isActive={filter === "active"}
      />
      <FilterButton
        label="Completed"
        filter="completed"
        isActive={filter === "completed"}
      />
    </div>
  );
};
