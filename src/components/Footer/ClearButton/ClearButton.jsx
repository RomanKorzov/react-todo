import styles from "./ClearButton.module.css";

export default function ClearButton({ text }) {
  return <button className={styles.button}>{text}</button>;
}
