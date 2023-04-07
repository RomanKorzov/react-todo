import styles from "./FilterButton.module.css";
import { Button } from "@consta/uikit/Button";

export const FilterButton = ({ label, filter, onFilterTodos, isActive }) => {
  return (
    <Button
      label={label}
      view="clear"
      className={`${styles.button} ${isActive ? styles.active : ""}`}
      onClick={() => onFilterTodos(filter)}
    />
  );
};
