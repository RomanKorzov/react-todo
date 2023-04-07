import { useState } from "react";
import styles from "./Form.module.css";

export const Form = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const clearText = () => {
    setText("");
  };

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
};
