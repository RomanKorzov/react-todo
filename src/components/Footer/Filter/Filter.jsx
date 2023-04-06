import styles from "./Filter.module.css";
import Button from "./Button/Button";

export default function Filter() {
  return (
    <div className={styles.filter}>
      <Button text="All" id="filter-all" />
      <Button text="Active" id="filter-active" />
      <Button text="Completed" id="filter-completed" />
    </div>
  );
}
