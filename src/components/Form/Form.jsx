import styles from "./Form.module.css";

export default function Form({ onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <input
        className={styles.input}
        name="add-todo"
        type="text"
        placeholder="What needs to be done?"
      />
    </form>
  );
}
