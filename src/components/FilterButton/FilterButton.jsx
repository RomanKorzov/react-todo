import styles from "./FilterButton.module.css";
import { Button } from "@consta/uikit/Button";
import { useContext } from "react";
import { TodoContext } from "../../context";

export const FilterButton = ({ label, filter, isActive }) => {
  const { setFilter } = useContext(TodoContext);
  return (
    <Button
      label={label}
      view="clear"
      className={`${styles.button} ${isActive ? styles.active : ""}`}
      onClick={() => setFilter(filter)}
    />
  );
};
