import styles from "./Button.module.css";

export default function Button({ text, id }) {
  return (
    <button className={`${styles.button} ${styles.button_active}`} id={id}>
      {text}
    </button>
  );
}
