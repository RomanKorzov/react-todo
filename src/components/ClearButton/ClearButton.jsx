import { Button } from "@consta/uikit/Button";

export const ClearButton = ({ text, onClearTodos }) => {
  return (
    <Button
      label="Clear all todos"
      view="clear"
      text={text}
      onClick={onClearTodos}
    />
  );
};
