import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  function addTodo(text) {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text: text, isDone: false }]);
    } else {
      alert("Input text!");
    }
  }

  function filteredTodos() {
    if (filter === "all") {
      return todos.filter((todo) => todo);
    }

    if (filter === "active") {
      return todos.filter((todo) => !todo.isDone);
    }

    if (filter === "completed") {
      return todos.filter((todo) => todo.isDone);
    }
  }

  function countActiveTodos() {
    return todos.filter((todo) => !todo.isDone).length;
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleIsDone(targetId) {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }

  function clearTodos() {
    setTodos([]);
  }

  return (
    <div className="App">
      <Header text="todos" />
      <div className="todo__wrapper">
        <Form onSubmit={addTodo} />
        <List
          todos={filteredTodos()}
          onDeleteTodo={deleteTodo}
          onToggleIsDone={toggleIsDone}
        />
        <Footer
          count={countActiveTodos()}
          filter={filter}
          onClearTodos={clearTodos}
          onFilterTodos={setFilter}
        />
      </div>
    </div>
  );
}

export default App;
