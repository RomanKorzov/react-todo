import styles from "./Footer.module.css";
import Counter from "./Counter/Counter";
import Filter from "./Filter/Filter";
import ClearButton from "./ClearButton/ClearButton";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Counter count={0} />
      <Filter />
      <ClearButton text="Clear All Todo" />
    </div>
  );
}
