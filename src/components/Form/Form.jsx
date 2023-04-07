import { useState } from "react";
import { TextField } from "@consta/uikit/TextField";

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
