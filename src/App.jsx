import { React, useMemo, useState, useEffect } from "react";
import { TodoContext } from "./context";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filter, setFilter] = useState(
    JSON.parse(localStorage.getItem("filter")) || "all"
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("filter", JSON.stringify(filter));
  }, [todos, filter]);

  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text: text, isDone: false }]);
    } else {
      alert("Input text!");
    }
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.isDone);
      case "completed":
        return todos.filter((todo) => todo.isDone);
      default:
        return todos;
    }
  }, [todos, filter]);

  const countActiveTodos = () => {
    return todos.filter((todo) => !todo.isDone).length;
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleIsDone = (targetId) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <TodoContext.Provider
      value={{
        filteredTodos,
        filter,
        deleteTodo,
        toggleIsDone,
        countActiveTodos,
        setFilter,
        clearTodos,
        addTodo,
      }}
    >
      <div className="App">
        <Header text="todos" />
        <div className="todo__wrapper">
          <Form />
          <List />
          <Footer />
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
