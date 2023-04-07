import { useContext, useState } from "react";
import { TextField } from "@consta/uikit/TextField";
import { TodoContext } from "../../context";

export const Form = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const clearText = () => {
    setText("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(text);
        clearText();
      }}
    >
      <TextField
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={({ value }) => setText(value)}
        width="full"
      />
    </form>
  );
};
