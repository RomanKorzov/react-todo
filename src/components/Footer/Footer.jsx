import styles from "./Footer.module.css";
import { Counter } from "../Counter/Counter";
import { Filter } from "../Filter/Filter";
import { ClearButton } from "../ClearButton/ClearButton";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Counter />
      <Filter />
      <ClearButton text="Clear All Todo" />
    </div>
  );
};
