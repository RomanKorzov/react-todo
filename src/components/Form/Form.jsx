import { useState } from "react";
import styles from "./Form.module.css";

export function Form({ onSubmit }) {
  const [text, setText] = useState("");

  function clearText() {
    setText("");
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(text);
        clearText();
      }}
    >
      <input
        className={styles.input}
        name="add-todo"
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}
