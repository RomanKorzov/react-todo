import { Button } from "@consta/uikit/Button";
import { useContext } from "react";
import { TodoContext } from "../../context";

export const ClearButton = ({ text }) => {
  const { clearTodos } = useContext(TodoContext);

  return (
    <Button
      label="Clear all todos"
      view="clear"
      text={text}
      onClick={clearTodos}
    />
  );
};
